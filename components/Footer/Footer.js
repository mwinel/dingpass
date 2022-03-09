import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <section>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <div>
                        <p>Company</p>
                        <div>
                            <Link href="#">
                                <a>About</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Careers</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Our Approach</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p>Contact</p>
                        <div>
                            <Link href="#">
                                <a>Help</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Press</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Affiliates</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Partners</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Hosts</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p>More</p>
                        <div>
                            <Link href="#">
                                <a>COVID 19</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Safety Information</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Insurace Covers</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a>Report a Concern</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
