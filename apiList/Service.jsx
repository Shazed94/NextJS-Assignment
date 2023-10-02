async function getAllServices() {
    const res = await fetch('https://agency.teamrabbil.com/api/AllService');
    if (!res.ok) {
        throw new Error("Service list calling fail")
    }
    return res.json();
}

export { getAllServices }