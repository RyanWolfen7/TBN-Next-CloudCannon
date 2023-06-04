function createSlugFromNames(string) {
    const separator = "-";
    const slug = string.trim().replace(/\s+/g, separator).toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-{2,}/g, separator);
    return slug;
}

export default createSlugFromNames
