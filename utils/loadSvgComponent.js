export default async function loadSvgComponent(name) {
    const { default: component } = await import(`../public/assets/icons/statistics/${name}.svg`);
    return component;
}
