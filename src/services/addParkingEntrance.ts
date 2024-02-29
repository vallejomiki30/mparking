const API = process.env.NEXT_PUBLIC_API

export const addParkingEntrance = async (values:any,levelID:string,locationID:number) => {
    const mutateValues = {
        values,
        levelID,
        locationID
    }
    const resp = await fetch(`${API}entrance/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({mutateValues})
    })

    if (!resp.ok) {
        return {error: "Error Encountered"}
    }

    const data = await resp.json()
    return data
} 