const H1Custom = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <h1 className={`text-primary font-whacky text-4xl ${className}`}>
            {children}
        </h1>
    )
}

export default H1Custom