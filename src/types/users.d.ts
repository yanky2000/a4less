    type user = {
        id: number,
        firstName: string,
        lastName?: string,
        age?: number,
        sex?: string,
        iq?: number,
        photo?: string,
        location?: location
    }; 

    type location = {
        city: string,
        zip?: number
    }
