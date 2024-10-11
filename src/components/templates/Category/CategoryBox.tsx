

export default function CategoryBox({ name }: { name: string }) {
    return (
        <div className="w-1/4 p-5 text-center bg-dark-800 rounded-lg" >
            <img className="w-32 mx-auto bg-dark-700 rounded-lg mb-2.5" src="https://techzaa.in/larkon/admin/assets/images/product/p-1.png" alt="" />
            <p>{name}</p>
        </div>
    )
}
