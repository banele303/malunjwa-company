interface TestimonialCardProps {
    name: string
    comment: string
  }
  
  export default function TestimonialCard({ name, comment }: TestimonialCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">"{comment}"</p>
        <p className="font-semibold">{name}</p>
      </div>
    )
  }