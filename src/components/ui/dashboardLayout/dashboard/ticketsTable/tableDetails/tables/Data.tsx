export const AgentsTicketsTabButtonData = [
    {
        id: 1,
        label: "All",
        endPoint: "alltime"
    },
    {
        id: 2,
        label: "Voice",
        endPoint: "voice"
    },
    {
        id: 3,
        label: "Chat",
        endPoint: "chat"
    },
    {
        id: 4,
        label: "Video",
        endPoint: "video"
    },
    {
        id: 5,
        label: "Email",
        endPoint: "email"
    }
]

export const SupervisorTicketsTabButtonData = [
    {
        id: 1,
        label: "All",
        endPoint: "alltime"
    },
    {
        id: 2,
        label: "Available",
        endPoint: "available"
    },
    {
        id: 3,
        label: "Away",
        endPoint: "away"
    },
    {
        id: 4,
        label: "Busy",
        endPoint: "busy"
    },
    {
        id: 5,
        label: "Other",
        endPoint: "other"
    }
]

export const AdminTicketsTabButtonData = [
    {
        id: 1,
        label: "All",
        endPoint: "alltime"
    },
    {
        id: 2,
        label: "Voice",
        endPoint: "voice"
    },
    {
        id: 3,
        label: "Chat",
        endPoint: "chat"
    },
    {
        id: 4,
        label: "Video",
        endPoint: "video"
    },
    {
        id: 5,
        label: "Email",
        endPoint: "email"
    }
]

export const AgentCommonTableColumn = [
    {
        id:1,
        label:"CUSTOMER"
    },
    {
        id:2,
        label:"TICKET #"
    },
    {
        id:3,
        label:"CHANNEL"
    },
    {
        id:4,
        label:"TYPE"
    },
    {
        id:5,
        label:"CALL TIME"
    },
    {
        id:6,
        label:"HOLD TIME"
    },
    {
        id:7,
        label:"HANDLED TIME"
    },
    {
        id:8,
        label:"WRAPPED TIME"
    },
    {
        id:9,
        label:"OVERALL SENTIMENT"
    },
    {
        id:10,
        label:"CALL DATE & TIME"
    }
    
]

export const SupervisorCommonTableColumn = [
    {
        id:1,
        label:"AGENT NAME"
    },
    {
        id:2,
        label:"Agent Availability Status"
    },
    {
        id:3,
        label:"AUDIO Call"
    },
    {
        id:4,
        label:"CHAT"
    },
    {
        id:5,
        label:"Video CALL"
    },
    {
        id:6,
        label:"WFH Staatus"
    },
    {
        id:7,
        label:"QUICK ACTIONS"
    },
    {
        id:8,
        label:"Average Handling Time"
    },
    {
        id:9,
        label:"total INTERACTION"
    }
    
]

export const AdminCommonTableColumn = [
    {
        id:1,
        label:"AGENT"
    },
    {
        id:2,
        label:"CUSTOMER"
    },
    {
        id:3,
        label:"CHANNEL"
    },
    {
        id:4,
        label:"TYPE"
    },
    {
        id:5,
        label:"CAMPAIGN NAME"
    },
    {
        id:6,
        label:"OVERALL SENTIMENT"
    },
    {
        id:7,
        label:"OVERALL Call RATING"
    },
    {
        id:8,
        label:"AI CONFIDENCE SCORE"
    },
    {
        id:9,
        label:"happened on"
    }
    
    
]

export const AgentCommonTableData= [
    {
        id:"1",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
            type: "call"
        },
        ticketId: "#84930",
        type: "inbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "positive",
        callDate: "Today",
        callFinalTime: "00:00:00",
        live: true
    },
    {
        id:"2",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar2.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "kiranmai@airtel.in",
            type: "email",
        },
        ticketId: "#84930",
        type: "outbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: false
    },
    {
        id:"3",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar3.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "+91 849*****93",
            type: "message",
        },
        ticketId: "#84930",
        type: "inbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "positive",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: true
    },
    {
        id:"4",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Dayananda V",
            contactInfo: "kiranmai@airtel.in",
            type: "video",
        },
        ticketId: "#84930",
        type: "inbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: false
    },
    {
        id:"5",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Lavanya Nagesh",
            contactInfo: "+91 849*****93",
            type: "call",
        },
        ticketId: "#84930",
        type: "outbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "positive",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: false
    },
    {
        id:"6",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
            type: "email"
        },
        ticketId: "#84930",
        type: "inbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "positive",
        callDate: "Today",
        callFinalTime: "00:00:00",
        live: false
    },
    {
        id:"7",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar2.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "kiranmai@airtel.in",
            type: "message",
        },
        ticketId: "#84930",
        type: "outbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: false
    },
    {
        id:"8",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar3.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "+91 849*****93",
            type: "video",
        },
        ticketId: "#84930",
        type: "inbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "positive",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: false
    },
    {
        id:"9",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Dayananda V",
            contactInfo: "kiranmai@airtel.in",
            type: "call",
        },
        ticketId: "#84930",
        type: "inbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: false
    },
    {
        id:"10",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Lavanya Nagesh",
            contactInfo: "+91 849*****93",
            type: "email",
        },
        ticketId: "#84930",
        type: "outbound",
        callTime: "00:00:00",
        holdTime: "00:00:00",
        handledTime: "00:00:00",
        wrappedTime: "00:00:00",
        setiment: "positive",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00",
        live: false
    },
]

export const SupervisorCommonTableData= [
    {
        id:"1",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"2",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar2.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "kiranmai@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 0,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"3",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar3.png",
            name: "Dayananda V",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "Yes",
        noOfWhf: 2,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"4",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Priya",
            contactInfo: "priya@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"5",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"1",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"2",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar2.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "kiranmai@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 0,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"3",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar3.png",
            name: "Dayananda V",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "Yes",
        noOfWhf: 2,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"4",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Priya",
            contactInfo: "priya@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"5",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"1",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"2",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar2.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "kiranmai@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 0,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"3",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar3.png",
            name: "Dayananda V",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "Yes",
        noOfWhf: 2,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"4",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Priya",
            contactInfo: "priya@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"5",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"1",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"2",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar2.png",
            name: "Kiranmai Kulakarni",
            contactInfo: "kiranmai@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 0,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
    {
        id:"3",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar3.png",
            name: "Dayananda V",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "Yes",
        noOfWhf: 2,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"4",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar4.png",
            name: "Priya",
            contactInfo: "priya@airtel.in",
        },
        noOfAudioCall: 1,
        noOfChat: 1,
        noOfVideoCall: 2,
        whfStatus: "-",
        noOfWhf: 0,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 10
    },
    {
        id:"5",
        userDetails: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
        },
        noOfAudioCall: 0,
        noOfChat: 0,
        noOfVideoCall: 0,
        whfStatus: "Yes",
        noOfWhf: 3,
        avarageHandlingTime: "00:00:00",
        noOfInteractionHandle: 5
    },
  
]

export const AdminCommonTableData= [
    {
        id:"1",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "call"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "4.0",
        confidenceScore: "89",
        setiment: "positive",
        callDate: "Today",
        callFinalTime: "00:00:00"
    },
    {
        id:"2",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "message"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "3.3",
        confidenceScore: "70",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00"
    },
    {
        id:"3",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "email"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "4.0",
        confidenceScore: "89",
        setiment: "positive",
        callDate: "Today",
        callFinalTime: "00:00:00"
    },
    {
        id:"4",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "video"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "3.3",
        confidenceScore: "70",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00"
    },
    {
        id:"6",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "call"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "4.0",
        confidenceScore: "89",
        setiment: "positive",
        callDate: "Today",
        callFinalTime: "00:00:00"
    },
    {
        id:"5",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "call"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "3.3",
        confidenceScore: "70",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00"
    },
    {
        id:"6",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "message"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "4.0",
        confidenceScore: "89",
        setiment: "positive",
        callDate: "Today",
        callFinalTime: "00:00:00"
    },
    {
        id:"7",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "video"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "3.3",
        confidenceScore: "70",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00"
    },
    {
        id:"8",
        useType: {
            agent: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            customer: {
                avatar: "/assets/dashboard/main_dashboard/avatar.png",
                name: "Preetam Kulakarni",
                contactInfo: "+91 849*****93",
            },
            type: "call"
        },
        type: "inbound",
        campaignName: "CampaignX",
        callRating: "3.3",
        confidenceScore: "70",
        setiment: "negative",
        callDate: "24/06/2023",
        callFinalTime: "00:00:00"
    }
  
]

export const TicketTableColumn = [
    {
        id:1,
        label:"CUSTOMER"
    },
    {
        id:2,
        label:"TICKET #"
    },
    {
        id:3,
        label:"CUSTOMER"
    },
    {
        id:4,
        label:"ASSIGNED TO"
    },
    {
        id:5,
        label:"PRIORITY"
    },
    {
        id:6,
        label:"Status"
    },
    {
        id:7,
        label:"LAST UPDATED"
    },
    {
        id:8,
        label:"CREATED ON"
    },
    {
        id:9,
        label:"ACTIONS"
    }
    
    
]
export const TicketTableData= [
    {
        id:1,
        reason: "Payment Issue",
        ticketId: "#84930",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
            type: "call"
        },
        assignTo: "You",
        assignAvatar: "/assets/dashboard/main_dashboard/avatar.png",
        priority: "High",
        status: "Open",
        lastUpdate: "2 hours ago",
        createdOn: "Yesterday 09:09:00a.m",
        taskDetails: "The caller inquired about their recent bill and requested a call back for further assistance. They mentioned a discrepancy in the billing amount",
        proposedTime: "10 am to 11 am"
    },
    {
        id:2,
        reason: "Product Inquiry",
        ticketId: "#84930",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Jayshri Tiwari",
            contactInfo: "praveen@gmail.com",
            type: "email"
        },
        assignTo: "You",
        assignAvatar: "/assets/dashboard/main_dashboard/avatar.png",
        priority: "Midium",
        status: "In Progress",
        lastUpdate: "2 hours ago",
        createdOn: "Yesterday 09:09:00a.m",
        taskDetails: "The caller inquired about their recent bill and requested.",
        proposedTime: "10 am to 11 am"
    },
    {
        id:3,
        reason: "Technical Support",
        ticketId: "#84930",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Vikas Tiwari",
            contactInfo: "+91 849*****93",
            type: "call"
        },
        assignTo: "You",
        assignAvatar: "/assets/dashboard/main_dashboard/avatar.png",
        priority: "Low",
        status: "In Progress",
        lastUpdate: "2 hours ago",
        createdOn: "Yesterday 09:09:00a.m",
        taskDetails: "The caller inquired about their recent bill and requested a call back for further assistance. They mentioned a discrepancy in the billing amount",
        proposedTime: "12 pm to 2 pm"
    },
    {
        id:4,
        reason: "Payment Issue",
        ticketId: "#84930",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Sutanu Das",
            contactInfo: "praveen@gmail.com",
            type: "email"
        },
        assignTo: "You",
        assignAvatar: "/assets/dashboard/main_dashboard/avatar.png",
        priority: "High",
        status: "Open",
        lastUpdate: "2 hours ago",
        createdOn: "Yesterday 09:09:00a.m",
        taskDetails: "The caller inquired about their recent bill and requested a call back for further assistance.",
        proposedTime: "9 am to 10 am"
    },
    {
        id:5,
        reason: "Technical Support",
        ticketId: "#84930",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
            type: "call"
        },
        assignTo: "You",
        assignAvatar: "/assets/dashboard/main_dashboard/avatar.png",
        priority: "Midium",
        status: "In Progress",
        lastUpdate: "2 hours ago",
        createdOn: "Yesterday 09:09:00a.m",
        taskDetails: "The caller inquired about their recent bill and requested a call back for further assistance. They mentioned a discrepancy in the billing amount",
        proposedTime: "8 am to 10 am"
    },
    {
        id:6,
        reason: "Technical Support",
        ticketId: "#84930",
        customer: {
            avatar: "/assets/dashboard/main_dashboard/avatar.png",
            name: "Preetam Kulakarni",
            contactInfo: "+91 849*****93",
            type: "call"
        },
        assignTo: "You",
        assignAvatar: "/assets/dashboard/main_dashboard/avatar.png",
        priority: "Low",
        status: "In Progress",
        lastUpdate: "2 hours ago",
        createdOn: "Yesterday 09:09:00a.m",
        taskDetails: "The caller inquired about their recent bill and requested a call back for further assistance. They mentioned a discrepancy in the billing amount",
        proposedTime: "10 am to 11 am"
    }
    
]



 