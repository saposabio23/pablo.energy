document.addEventListener('DOMContentLoaded', () => {
    const primaryList = document.querySelector('.nav__list--primary');
    const secondaryList = document.querySelector('.nav__list--secondary');
    const anchor = document.querySelector('.nav__title--primary');
    const targets = secondaryList ? secondaryList.querySelectorAll('.nav__title') : [];

    if (!primaryList || !secondaryList || !anchor || !targets.length) return;

    let baseTransform = 'translateY(0)';

    const applyTransform = (value, { animate = true } = {}) => {
        if (!animate) {
            const previousTransition = anchor.style.transition || '';
            anchor.style.transition = 'none';
            anchor.style.transform = value;
            void anchor.offsetHeight; // force reflow
            requestAnimationFrame(() => {
                anchor.style.transition = previousTransition;
            });
            return;
        }
        anchor.style.transform = value;
    };

    const moveAnchor = (el, options) => {
        const primaryTop = primaryList.getBoundingClientRect().top;
        const targetTop = el.getBoundingClientRect().top;
        applyTransform(`translateY(${targetTop - primaryTop}px)`, options);
    };

    const setBaseTransform = (value, options) => {
        baseTransform = value;
        applyTransform(baseTransform, options);
    };

    const resetAnchor = (options) => {
        applyTransform(baseTransform, options);
    };

    const getPathSlug = () => {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('works')) return 'works';
        if (path.includes('sites')) return 'sites';
        if (path.includes('cv')) return 'cv';
        if (path.includes('friends')) return 'friends';
        if (path.includes('today')) return 'today';
        return 'energy';
    };

    const findNavItem = (slug) => {
        return Array.from(targets).find(
            (title) => title.textContent.trim().toLowerCase() === slug
        );
    };

    const setInitialAnchor = () => {
        const slug = getPathSlug();
        if (slug === 'energy') {
            setBaseTransform('translateY(0)', { animate: false });
            return;
        }
        const initialTarget = findNavItem(slug);
        if (initialTarget) {
            const primaryTop = primaryList.getBoundingClientRect().top;
            const targetTop = initialTarget.getBoundingClientRect().top;
            setBaseTransform(`translateY(${targetTop - primaryTop}px)`, { animate: false });
        } else {
            setBaseTransform('translateY(0)', { animate: false });
        }
    };

    targets.forEach((title) => {
        title.addEventListener('mouseenter', () => moveAnchor(title));
        title.addEventListener('focus', () => moveAnchor(title));
        title.addEventListener('mouseleave', resetAnchor);
        title.addEventListener('blur', resetAnchor);
    });

    secondaryList.addEventListener('mouseleave', resetAnchor);

    setInitialAnchor();
});
