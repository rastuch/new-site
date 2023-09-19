export const fillerSwaggerByTag = (tagName,swaggerJson) => {
    if (!swaggerJson.tags.some(tag => tag.name === tagName)) {
        return null;
    }

    const filteredPaths = {};
    for (const [path, pathItem] of Object.entries(swaggerJson.paths)) {
        for (const [method, operation] of Object.entries(pathItem)) {
            if (operation.tags.includes(tagName)) {
                if (!filteredPaths[path]) {
                    filteredPaths[path] = {};
                }
                filteredPaths[path][method] = operation;
            }
        }
    }

    const usedTags = swaggerJson.tags.filter(tag => tag.name === tagName);

    const filteredSwagger = {
        ...swaggerJson,
        tags: usedTags,
        paths: filteredPaths,
    };
    return filteredSwagger;
}

export const swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';