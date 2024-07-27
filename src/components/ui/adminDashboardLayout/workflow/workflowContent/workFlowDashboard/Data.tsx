export const DashboardInsightData = [
    {
        id:1,
        name: "IVR",
        text: "Streamline interactions. Enhance efficiency.",
        icon: "iPhone.svg",
        primaryColor: "#B78F04",
        workflowList: [
            {
                id: 1,
                name: "Draft",
                value: 4,
                color1: "#7AD3FF",
                color2: "#4FBAF0"
            },
            {
                id: 2,
                name: "Pending Approvals",
                value: 1,
                color1: "#FE6C6C",
                color2: "#FE464B"
            },
            {
                id: 3,
                name: "Approved",
                value: 3,
                color1: "#99FFA3",
                color2: "#68EE76"
            },
            {
                id: 4,
                name: "Live",
                value: 8,
                color1: "#FFD572",
                color2: "#FEBD38"
            }
        ]
    },
    {
        id:2,
        name: "Messaging Bots",
        text: "Optimize engagement with Messaging Bot workflows",
        icon: "bot.svg",
        primaryColor: "#70A009",
        workflowList: [
            {
                id: 1,
                name: "Draft",
                value: 3,
                color1: "#7AD3FF",
                color2: "#4FBAF0"
            },
            {
                id: 2,
                name: "Pending Approvals",
                value: 4,
                color1: "#FE6C6C",
                color2: "#FE464B"
            },
            {
                id: 3,
                name: "Approved",
                value: 10,
                color1: "#99FFA3",
                color2: "#68EE76"
            },
            {
                id: 4,
                name: "Live",
                value: 14,
                color1: "#FFD572",
                color2: "#FEBD38"
            }
        ]
    },
    {
        id:3,
        name: "Campaigns",
        text: "Drive success with Campaigns workflows.",
        icon: "camera.svg",
        primaryColor: "#0674D9",
        workflowList: [
            {
                id: 1,
                name: "Draft",
                value: 10,
                color1: "#7AD3FF",
                color2: "#4FBAF0"
            },
            {
                id: 1,
                name: "Pending Approvals",
                value: 1,
                color1: "#FE6C6C",
                color2: "#FE464B"
            },
            {
                id: 1,
                name: "Approved",
                value: 1,
                color1: "#99FFA3",
                color2: "#68EE76"
            },
            {
                id: 4,
                name: "Live",
                value: 0,
                color1: "#FFD572",
                color2: "#FEBD38"
            }
        ]
    },
    {
        id:4,
        name: "Inbound",
        text: "Simplify Inbound Workflows. Maximize Impact.",
        icon: "inbox_in.svg",
        primaryColor: "#06B3D9",
        workflowList: [
            {
                id: 1,
                name: "Draft",
                value: 10,
                color1: "#7AD3FF",
                color2: "#4FBAF0"
            },
            {
                id: 2,
                name: "Pending Approvals",
                value: 5,
                color1: "#FE6C6C",
                color2: "#FE464B"
            },
            {
                id: 3,
                name: "Approved",
                value: 6,
                color1: "#99FFA3",
                color2: "#68EE76"
            },
            {
                id: 4,
                name: "Live",
                value: 15,
                color1: "#FFD572",
                color2: "#FEBD38"
            }
        ]
    },
    {
        id:5,
        name: "Outbound",
        text: "Drive engagement with outbound workflows.",
        icon: "inbox_out.svg",
        primaryColor: "#C60C43",
        workflowList: [
            {
                id: 1,
                name: "Draft",
                value: 7,
                color1: "#7AD3FF",
                color2: "#4FBAF0"
            },
            {
                id: 2,
                name: "Pending Approvals",
                value: 3,
                color1: "#FE6C6C",
                color2: "#FE464B"
            },
            {
                id: 3,
                name: "Approved",
                value: 2,
                color1: "#99FFA3",
                color2: "#68EE76"
            },
            {
                id: 4,
                name: "Live",
                value: 5,
                color1: "#FFD572",
                color2: "#FEBD38"
            }
        ]
    },
    {
        id:6,
        name: "Process",
        text: "Simplify processes. Amplify results. Process flows at your fingertips.",
        icon: "subtask.svg",
        primaryColor: "#7006D9",
        workflowList: [
            {
                id: 1,
                name: "Draft",
                value: 0,
                color1: "#7AD3FF",
                color2: "#4FBAF0"
            },
            {
                id: 2,
                name: "Pending Approvals",
                value: 0,
                color1: "#FE6C6C",
                color2: "#FE464B"
            },
            {
                id: 3,
                name: "Approved",
                value: 0,
                color1: "#99FFA3",
                color2: "#68EE76"
            },
            {
                id: 4,
                name: "Live",
                value: 0,
                color1: "#FFD572",
                color2: "#FEBD38"
            }
        ]
    }
]

export const RecentWorkflow = [
    {
        id: 1,
        message: "My First IVR Flow",
        type: "IVR",
        status: "DRAFT",
        text: "Description of workflow comes here in max of two lines with ellipses",
        date: "Since Jul 20",
        deployed: "Not yet deployed",
        deployedStatus: false
    },
    {
        id: 2,
        message: "Messaging Bot",
        type: "Bot",
        status: "LIVE",
        text: "Description of workflow comes here in max of two lines with ellipses",
        date: "Since May 28",
        deployed: "Deployed on May 30",
        deployedStatus: true
    },
    {
        id: 3,
        message: "Customer Survey",
        type: "Survey",
        status: "REVIEW",
        text: "Description of workflow comes here in max of two lines with ellipses",
        date: "Since May 28",
        deployed: "Not yet deployed",
        deployedStatus: false
    }
]

