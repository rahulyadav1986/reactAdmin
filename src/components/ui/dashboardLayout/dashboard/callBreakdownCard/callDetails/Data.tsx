export const AgentCallDetailsData = [
    {
        id: 1,
        label: "Total Calls",
        calls: "1,299",
        level:[
            {
                id: 1,
                label: "Inbound",
                calls: "519",
                status: "39.95",
                level:[
                    {
                        id: 1,
                        label: "Answered",
                        calls: "311",
                        status: "60",
                        hasData: false,
                        level:[]
                    },
                    {
                        id: 2,
                        label: "Unanswered",
                        calls: "181",
                        status: "35",
                        hasData: true,
                        level:[
                            {
                                id: 1,
                                label: "Missed",
                                calls: "22",
                                status: "13",
                            },
                            {
                                id: 2,
                                label: "Abandoned",
                                calls: "99",
                                status: "55",
                            },
                            {
                                id: 3,
                                label: "Transferred",
                                calls: "57",
                                status: "32",
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: "Call back requested",
                        calls: "25",
                        status: "5",
                        hasData: false,
                        level:[]
                    }
                ]
            },
            {
                id: 2,
                label: "Outbound",
                calls: "780",
                status: "60.05",
                level:[
                    {
                        id: 1,
                        label: "Agent Initiated",
                        calls: "257",
                        status: "33",
                        hasData: true,
                        level:[
                            {
                                id: 1,
                                label: "Connected",
                                calls: "141",
                                status: "55",
                            },
                            {
                                id: 2,
                                label: "Cancelled",
                                calls: "116",
                                status: "67",
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: "System Initiated",
                        calls: "523",
                        status: "67",
                        hasData: false,
                        level:[]
                    }
                ]
            }
        ]
    }
]

export const SupervisorCallDetailsData = [
    {
        id: 1,
        label: "Total",
        calls: "1,299",
        level:[
            {
                id: 1,
                label: "Inbound",
                calls: "519",
                status: "39.95",
                level:[
                    {
                        id: 1,
                        label: "Answered",
                        calls: "311",
                        status: "60",
                        hasData: false,
                        level:[]
                    },
                    {
                        id: 2,
                        label: "Unanswered",
                        calls: "181",
                        status: "35",
                        hasData: true,
                        level:[
                            {
                                id: 1,
                                label: "Missed",
                                calls: "22",
                                status: "13",
                            },
                            {
                                id: 2,
                                label: "Abandoned",
                                calls: "99",
                                status: "55",
                            },
                            {
                                id: 3,
                                label: "Transferred",
                                calls: "57",
                                status: "32",
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: "Call back requested",
                        calls: "25",
                        status: "5",
                        hasData: false,
                        level:[]
                    }
                ]
            },
            {
                id: 2,
                label: "Outbound",
                calls: "780",
                status: "60.05",
                level:[
                    {
                        id: 1,
                        label: "Supervisor Initiated",
                        calls: "257",
                        status: "33",
                        hasData: true,
                        level:[
                            {
                                id: 1,
                                label: "Connected",
                                calls: "141",
                                status: "55",
                            },
                            {
                                id: 2,
                                label: "Cancelled",
                                calls: "116",
                                status: "67",
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: "System Initiated",
                        calls: "523",
                        status: "67",
                        hasData: false,
                        level:[]
                    }
                ]
            }
        ]
    }
]


export const GraphDetailsData = [
    {
        name: 'Apr 23',
        total: 50,
        missed: 25,
        answered: 15,
        transferred: 10
    },
    {
        name: 'May 23',
        total: 100,
        missed: 50,
        answered: 15,
        transferred: 35
    },
    {
        name: 'Jun 23',
        total: 150,
        missed: 50,
        answered: 75,
        transferred: 25
    },
    {
        name: 'Jul 23',
        total: 250,
        missed: 100,
        answered: 50,
        transferred: 100
    },
    {
        name: 'Aug 23',
        total: 300,
        missed: 150,
        answered: 100,
        transferred: 50
    }
]