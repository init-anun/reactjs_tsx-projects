//importing react and react component
import React from "react";
import ReactDOM from "react-dom/client";
// importing SingleComment component
import SingleComment from "./SingleComment";

// importing UserCard
import UserCard from "./UserCard";

// importing images
import Profile1 from "./images/person1.jpeg";
import Profile2 from "./images/person2.jpeg";
import Profile3 from "./images/person3.jpeg";


//creating react app component
const App = () => {
    return(
        <div className="ui comments">

            <UserCard>
                <SingleComment 
                    name="Alex"
                    date="Today at 5:00 pm"
                    text="Amazing"
                    picture={ Profile1 }
                />
            </UserCard>

            <UserCard>
                <SingleComment
                    name="Jack"
                    date="Today at 6:00 pm"
                    text="Great job!"
                    picture={ Profile2 }
                />
            </UserCard>

            <UserCard>
                <SingleComment
                    name="Sarah"
                    date="Today at 7:00 pm"
                    text="Thanks..."
                    picture={ Profile3 }
                />
            </UserCard>

        </div>
    )
}

// Rendering instance of react-App component
//const container = document.getElementById("root");
//const root = ReactDOM.createRoot(container);
 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

