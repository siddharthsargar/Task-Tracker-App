const API_URL = "https://jsonplaceholder.typicode.com/todos";


export const fetchTasks = async () => {
    const response = await fetch(`${API_URL}?_limit=10`);
    console.log("get response is", response)
    return response.json();
}



export const addTask = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task),
    });
    console.log("response is", response)
    return response.json();
};



export const deleteTask = async(id) => {
    console.log("delete id is", id)
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};