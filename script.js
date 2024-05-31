const LinkArray = [
    {
        "Title": "LinkedIn",
        "Link": "https://www.linkedin.com/in/soumojit-shome",
        "Type": "Other"
    },
    {
        "Title": "GitHub",
        "Link": "https://github.com/Soumojitshome2023",
        "Type": "Other"
    },
    {
        "Title": "YouTube",
        "Link": "https://youtube.com/@soumojitshome",
        "Type": "Other"
    },
    {
        "Title": "Portfolio Website",
        "Link": "https://soumojitshome.vercel.app",
        "Type": "Imp"
    },
    {
        "Title": "About Page",
        "Link": "https://soumojitshomeblog.vercel.app/about/",
        "Type": "Other"
    },
    {
        "Title": "Google Developer Profile",
        "Link": "https://g.dev/soumojitshome2023/",
        "Type": "Other"
    },
    {
        "Title": "Blog Web Page",
        "Link": "https://soumojitshomeblog.vercel.app/blogs/",
        "Type": "Imp"
    },
    {
        "Title": "GeeksforGeeks",
        "Link": "https://auth.geeksforgeeks.org/user/soumojits8qiy",
        "Type": "Other"
    },
    {
        "Title": "LeetCode",
        "Link": "https://leetcode.com/Soumojit_Shome",
        "Type": "Other"
    },
    {
        "Title": "HackerRank",
        "Link": "https://www.hackerrank.com/soumojitshome201?hr_r=1",
        "Type": "Other"
    },
    {
        "Title": "LinkTree",
        "Link": "https://linktr.ee/soumojitshome",
        "Type": "Other"
    },
    {
        "Title": "Holopin",
        "Link": "https://www.holopin.io/@soumojitshome2023#",
        "Type": "Other"
    },
    {
        "Title": "Google Cloud",
        "Link": "https://www.cloudskillsboost.google/public_profiles/987a5721-fedc-48e5-a9eb-f19e813782bd",
        "Type": "Other"
    },
    {
        "Title": "Peerlist",
        "Link": "https://peerlist.io/soumojit_shome",
        "Type": "Other"
    },
    {
        "Title": "Projects",
        "Link": "https://soumojitshomeblog.vercel.app/projects/",
        "Type": "Imp"
    },
    {
        "Title": "Certificates",
        "Link": "https://soumojitshomeblog.vercel.app/certificates/",
        "Type": "Imp"
    },
    {
        "Title": "Resume",
        "Link": "https://drive.google.com/file/d/11Q2jRHf40tcqbG9fF_H4CdAWA4G1ikXL/view?usp=drive_link",
        "Type": "Imp"
    }
]



const ImpLinksBox = document.getElementById("ImpLinksBox");
const OthersLinksBox = document.getElementById("OthersLinksBox");

LinkArray.forEach(element => {
    let HTMLSet = `
<a style="--clr: #2e2e2e" class="button" id="LinkBtn" target="_blank" href=${element.Link}>
    <span class="button__icon-wrapper">
        <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 15">
            <path fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
            </path>
        </svg>
        <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg"
            width="10" fill="none" viewBox="0 0 14 15">
            <path fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
            </path>
        </svg>
    </span>
    ${element.Title}
</a>    
`

    if (element.Type == "Imp") {
        ImpLinksBox.innerHTML += HTMLSet;
    }
    else {
        OthersLinksBox.innerHTML += HTMLSet;
    }
});