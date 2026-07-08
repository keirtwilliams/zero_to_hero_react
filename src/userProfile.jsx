 function ProfilePicture(){
return (
    <img src="https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f"></img>
)
}

 function ProfileBio(){
    return (
        <>
         <p>Testing1232132112</p>
        </>
    )
}


function userProfile(){
    return (
        <>
            <section>
                  <ProfilePicture />
                  <ProfileBio />

            </section>
        </>
    )
}

export default userProfile;