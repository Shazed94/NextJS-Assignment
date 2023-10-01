async function getHeroInfo() {
    const res = await fetch('https://agency.teamrabbil.com/api/HeroList');
    if (!res.ok) {
        throw new Error("Hero list calling fail")
    }
    return res.json();
}
async function getBrandList() {
    const res = await fetch('https://agency.teamrabbil.com/api/BrandList');
    if (!res.ok) {
        throw new Error("Brand list calling fail")
    }
    return res.json();
}
async function getWorkList() {
    const res = await fetch('https://agency.teamrabbil.com/api/WorkList');
    if (!res.ok) {
        throw new Error("Work list calling fail")
    }
    return res.json();
}
async function getFeaturedProjects() {
    const res = await fetch('https://agency.teamrabbil.com/api/FeaturedProject');
    if (!res.ok) {
        throw new Error("Featured Project list calling fail")
    }
    return res.json();
}
async function getStats() {
    const res = await fetch('https://agency.teamrabbil.com/api/StatList');
    if (!res.ok) {
        throw new Error("Stat list calling fail")
    }
    return res.json();
}
async function getSiteMeta() {
    const res = await fetch('https://agency.teamrabbil.com/api/SiteMeta/home');
    if (!res.ok) {
        throw new Error("Stat list calling fail")
    }
    return res.json();
}




export { getHeroInfo, getBrandList, getWorkList, getFeaturedProjects, getStats,getSiteMeta }