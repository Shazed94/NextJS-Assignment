async function getAllProjects() {
    const res = await fetch('https://agency.teamrabbil.com/api/AllProject');
    if (!res.ok) {
        throw new Error("Projects calling fail")
    }
    return res.json();
}

export { getAllProjects }