async function getTeamList() {
    const res = await fetch('https://agency.teamrabbil.com/api/TeamList');
    if (!res.ok) {
        throw new Error("Teamlist calling fail")
    }
    return res.json();
}

export { getTeamList }