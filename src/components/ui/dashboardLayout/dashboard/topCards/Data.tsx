export const TopCardData = [
    {
        id:1,
        icon: "/assets/dashboard/main_dashboard/rocket.svg",
        label: "Average Speed to Answer",
        iconBgColor: "rgba(226, 241, 214, 0.50)",
        status:"<span class='no' style='color: #015EB0'>1</span> hr <span class='no' style='color: #015EB0'>5</span> min <span class='no' style='color: #015EB0'>20</span> sec",
        threshold: "<span style='color:#015EB0'>2</span> mins",
        maxmin:[]
    },
    {
        id:2,
        icon: "/assets/dashboard/main_dashboard/clock.svg",
        label: "Avg Handled Time",
        iconBgColor: "rgba(241, 235, 214, 0.50)",
        status:"<span class='no' style='color: #015EB0'>1</span> hr <span class='no' style='color:#EF0404'>12</span> min <span class='no' style='color: #015EB0'>08</span> sec",
        threshold: "<span style='color:#015EB0'>2</span> mins",
        maxmin:["Max: 32m", "Min: 2m"]
    },
    {
        id:3,
        icon: "/assets/dashboard/main_dashboard/phone.svg",
        label: "First Call Resolution",
        iconBgColor: "rgba(214, 236, 241, 0.50)",
        status:"<span class='no' style='color: #008344'>89%</span>",
        threshold: "<span style='color:#4E545F'>87</span>%",
        maxmin:["Max: 98%", "Min: 12%"]
    },
    {
        id:4,
        icon: "/assets/dashboard/main_dashboard/circular_user.svg",
        label: "CSAT",
        iconBgColor: "rgba(214, 220, 241, 0.50)",
        status:"<span class='no' style='color: #008344'>95%</span> Satisfied",
        threshold: "<span style='color:#4E545F'>94</span>%",
        maxmin:["<span style='color: #008344'>3.4%</span> vs  last 30 days"]
    }
]