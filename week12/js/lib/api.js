// GET
const GET = async(url) => {
    try {
        const res = await fetch(url); // response object
        console.log(res);
        return await res.json();
    }catch(e) {
        throw new Error(e);
    }
};


export { GET };