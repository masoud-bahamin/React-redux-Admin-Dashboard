import { Star } from "lucide-react";


export default function Rating({ rate, count = 23 }: { rate: number, count: number }) {
    return (
        <div className="flex items-center py-1">
            <Star size={16} className="text-gold-400" />
            <Star size={16} className="text-gold-400" />
            <Star size={16} className="text-gold-400" />
            <Star size={16} className="text-gold-400" />
            <Star size={16} className="text-gold-400" />
            <span className="ml-auto">{rate} ({count})</span>
        </div>
    )
}
