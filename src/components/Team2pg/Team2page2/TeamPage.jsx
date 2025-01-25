// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faInstagram,
//     faLinkedin,
//     faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import "./TamPage.css";

// const TeamPage = () => {
//     const teamMembers = [
//         {
//             id: 1,
//             name: "Member 1",
//             role: "UI/UX",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member1",
//             linkedin: "https://linkedin.com/in/member1",
//             github: "https://github.com/member1",
//         }, {
//             id: 2,
//             name: "Member 2",
//             role: "Developer",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member2",
//             linkedin: "https://linkedin.com/in/member2",
//             github: "https://github.com/member2",
//         },
//         {
//             id: 3,
//             name: "Member 1",
//             role: "UI/UX",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member1",
//             linkedin: "https://linkedin.com/in/member1",
//             github: "https://github.com/member1",
//         },
//         {
//             id: 4,
//             name: "Member 2",
//             role: "Developer",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member2",
//             linkedin: "https://linkedin.com/in/member2",
//             github: "https://github.com/member2",
//         },
//         {
//             id: 5,
//             name: "Member 1",
//             role: "UI/UX",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member1",
//             linkedin: "https://linkedin.com/in/member1",
//             github: "https://github.com/member1",
//         },
//         {
//             id: 6,
//             name: "Member 2",
//             role: "Developer",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member2",
//             linkedin: "https://linkedin.com/in/member2",
//             github: "https://github.com/member2",
//         },
//         {
//             id: 7,
//             name: "Member 1",
//             role: "UI/UX",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member1",
//             linkedin: "https://linkedin.com/in/member1",
//             github: "https://github.com/member1",
//         },
//         {
//             id: 8,
//             name: "Member 2",
//             role: "Developer",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member2",
//             linkedin: "https://linkedin.com/in/member2",
//             github: "https://github.com/member2",
//         },
//         {
//             id: 9,
//             name: "Member 1",
//             role: "UI/UX",
//             image: "/src/assets/team.jpeg",
//             instagram: "https://instagram.com/member1",
//             linkedin: "https://linkedin.com/in/member1",
//             github: "https://github.com/member1",
//         }

//         // Add more team members as required
//     ];

//     return (
//         <div className="team-page">
//             <h1 className="team-title">The Official Team of Ureckon'25</h1>

//             {/* Let's Start Section */}
//             <div className="lets-start">
//                 <p>Let's Start!</p>
//             </div>

//             {/* Back Button */}
//             <div className="back-button">
//                 <button>{"<< Back"}</button>
//             </div>

//             <div className="team-grid">
//                 {teamMembers.map((member) => (
//                     <div className="team-card" key={member.id}>
//                         <img src={member.image} alt={member.name} />
//                         <h3>{member.name}</h3>
//                         <p>{member.role}</p>
//                         <div className="social-icons">
//                             <a
//                                 href={member.instagram}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <FontAwesomeIcon icon={faInstagram} />
//                             </a>
//                             <a
//                                 href={member.linkedin}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <FontAwesomeIcon icon={faLinkedin} />
//                             </a>
//                             <a
//                                 href={member.github}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <FontAwesomeIcon icon={faGithub} />
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TeamPage;
import React from "react";
import "./TamPage.css";

const TeamPage = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Member 1",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member1",
        },
        {
            id: 2,
            name: "Member 2",
            role: "Developer",
            image: "/src/assets/team.jpeg",
            instagram: "member2",
        },
        {
            id: 3,
            name: "Member 3",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 4,
            name: "Member 3",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 5,
            name: "Member 3",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 6,
            name: "Member 3",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 7,
            name: "Member 3",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 8,
            name: "Member 3",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        {
            id: 9,
            name: "Member 3",
            role: "UI/UX",
            image: "/src/assets/team.jpeg",
            instagram: "member3",
        },
        // Add more team members as required
    ];

    return (
        <div className="team-page">
            <h1 className="team-title">The Official Team of Ureckon'25</h1>

            {/* Let's Start Section */}
            <div className="lets-start">
                <p>Let's Start!</p>
            </div>

            {/* Back Button */}
            <div className="back-button">
                <button>{"<< Back"}</button>
            </div>

            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div className="team-card" key={member.id}>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
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
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
