export default function UserInfo(props) {
    return (
        <div className="UserInfo">
            <ol>
                <ul>{props.email}</ul>
                <ul>Logout</ul>
            </ol>
        </div>
    )
}