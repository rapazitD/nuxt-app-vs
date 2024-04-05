export default async function loadSvgComponent(name, iconFolder) {
    const { default: component } = await import(`../public/assets/icons/${iconFolder}/${name}.svg`);
    return component;
}
