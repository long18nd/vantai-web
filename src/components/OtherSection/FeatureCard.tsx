const FeatureCard = ({ icon, title, content } : any) => (
    <div className="flex gap-4 p-4 rounded-md hover:bg-[#1F4C77] transition duration-300">
        <div className="text-orange-300">{icon}</div>
        <div>
            <h3 className="text-orange-400 font-semibold text-base mb-1">{title}</h3>
            <div className="text-gray-200 space-y-1">{content}</div>
        </div>
    </div>
);

export default FeatureCard;