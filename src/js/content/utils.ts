const extractScripts = (resources: string[]): string[] => {
    return resources.filter(resource => isScript(resource));
};

const isScript = (resource: string): boolean => /^.+\.js$/.test(resource);

export {
    extractScripts,
};
