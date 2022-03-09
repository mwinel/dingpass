export default function HowItWorks({ title, text, icon }) {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg">
            {icon}
            <p className="mb-4 text-xl font-bold font-poppins">{title}</p>
            <p className="text-center text-gray-700">{text}</p>
        </div>
    );
}
