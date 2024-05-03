import Container from "@/app/components/Container";

const Navbar = () => {
    return (
        // because we have a fixed navbar, so the original children will be dissapeared
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
                className="
                py-4
                border-b-[1px]"
            >
                <Container>
                    anything like this
                </Container>
            </div>
        </div>
    )

}

export default Navbar