export interface PostType {
    "id": 2,
    "title": "Ab vero aspernatur rem accusamus nam rerum dolor.",
    "slug": "aut-laborum-a",
    "content": "Cum officia laudantium ipsam mollitia cupiditate culpa. Nobis temporibus dolores similique. Quam perspiciatis voluptatem et. Qui et blanditiis illum quo dolor non cumque aliquid ut. Libero rem dolorem libero provident eum. Est dolores quisquam consequatur deleniti autem consequatur provident rem. Qui labore modi sit aliquam. Est voluptatem et accusantium omnis. Expedita quod laudantium et quae. Quos ut rem corporis quia.",
    "hit": 389074,
    "category": {
        "id": 5
    },
    "user": {
        "id": 22
    },
    "status": "draft",
    "status_color": "orange",
    "createdAt": "2024-03-23T12:34:10.790Z",
    "publishedAt": "2024-08-30T06:42:17.327Z",
    "image": [
        {
            "url": "http://loremflickr.com/640/480/abstract",
            "name": "7ed654cc-d460-4b03-96eb-198a1b65b703",
            "status": "done",
            "type": "image/jpeg",
            "uid": "3b2eca51-1aa0-45a6-b2b5-a652ca3f6f8e"
        }
    ],
    "tags": [
        7,
        6
    ],
    "language": 3
}

export interface ProductType {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "thumbnail": string,
    "rating": number
}
export interface CategoryType {
    "slug": string,
    "name": string,
    "url": string
}

export interface UserType {
    "id": number,
    "firstName": string,
    "lastName": string,
    "age": number,
    "gender": "female" | "male",
    "email": string,
    "phone": string,
    "username": string,
    "password": string,
    "image": string,
    "role": "admin" | "user"

    "address": {
        "address": string,
        "city": string,
        "state": string,
    },
    "country": string


}