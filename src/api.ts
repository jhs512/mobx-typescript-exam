export const getNotes = ():Promise<string[]> => {
    return fetch("http://localhost:4000/notes").then(res => res.json())
}

export const postNotes = (notes: string[]) => {
    return fetch("http://localhost:4000/notes", {
        method: "POST",
        headers: {
            Accpet: "Application/json",
            "Content-type": "Application/json",
        },
        body: JSON.stringify(notes)
    })
}