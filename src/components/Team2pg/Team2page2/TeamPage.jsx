import React from "react";
import "./team2.css";

const TeamPage = () => {
    const teamMembers = [
        {
            id: 1,
            cardcolor: "red",
            name: "Trisha Trisha Trisha Trisha Trisha Trisha Trisha",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member1",
        },
        {
            id: 2,
            cardcolor: "blue",
            name: "Member two",
            role: "Developer",
            image: "/src/assets/team.jpeg",
            instagram: "member2",
        },
        {
            id: 3,
            cardcolor: "yellow",
            name: "Member three",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 4,
            cardcolor: "green",
            name: "Member four",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 5,
            cardcolor: "red",
            name: "Soumyakanti Biswas ",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 6,
            cardcolor: "blue",
            name: "Member six",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 7,
            cardcolor: "yellow",
            name: "Member seven",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 8,
            cardcolor: "green",
            name: "Member eight",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 9,
            cardcolor: "red",
            name: "Anirban Basak",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        // Add more team members as required
    ];
    const colors = [
        "bg-[rgba(255,0,0,0.2)]",      // Red
        "bg-[rgba(88,140,138,0.2)]",   // Blue
        "bg-[rgba(254,220,1,0.2)]",    // Yellow
        "bg-[rgba(85,214,138,0.2)]",   // Green
    ];

    return (
        <div className="team-page">
            <h1 className="team-title">The Official Team of Ureckon'25</h1>

            {/* Let's Start Section */}
            <div className="lets-start hidden md:block">
                <p>Let's Start!</p>
            </div>

            {/* Back Button */}
            <div className="back-button">
                <button><p className="text-2xl md:text-3xl lg:text-4xl text-gray-400 text-center shadow-glow transition-all duration-300 fixed left-8 top-10 md:left-24">{"<< BACK"}</p></button>
            </div>
            <div className=" flex w-[90%] mx-auto">
                <div className="bg -rose-300 w-[66%] lg:w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid gap-4">
                    {teamMembers.map((member) => (
                        <div className={`team-card ${member.cardcolor}`} key={member.id}>
                            <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="mt-2 text-lg font-semibold">{member.name}</h3>
                            <div>
                                <h3 >{member.role}</h3>

                                <div className="social-icons">
                                    <a
                                        href={`https://instagram.com/${member.instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/src/assets/insta.png"
                                            alt="Instagram"
                                            className="social-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="team-grid">
                {teamMembers.map((member) => (
                    <div className={`team-card ${member.cardcolor}`} key={member.id}>
                        <img src={member.image} alt={member.name} />
                        <h3 className="padding">{member.name}</h3>
                        <div>
                            <h3>{member.role}</h3>

                            <div className="social-icons">
                                <a
                                    href={`https://instagram.com/${member.instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/src/assets/insta.png"
                                        alt="Instagram"
                                        className="social-icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default TeamPage;
