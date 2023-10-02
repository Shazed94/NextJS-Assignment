async function getAllTestimonials() {
    const res = await fetch('https://agency.teamrabbil.com/api/TestimonialList');
    if (!res.ok) {
        throw new Error("Testimonials list calling fail")
    }
    return res.json();
}

export { getAllTestimonials }