import "./Login.scss";
export default function Login(){
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>hello</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas suscipit deleniti a, quasi explicabo enim vero doloribus ratione libero beatae obcaecati ad velit magni modi? Error ducimus similique distinctio.</p>
                    <span>Don't you have an account</span>
                    <button>register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" />
                        <input type="password" />
                        <button>Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}