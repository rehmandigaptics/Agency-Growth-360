import { sitePath } from "@/lib/site-path";

/** Local marketing photos in /public/images */
export const siteImages = {
  teamCollab: sitePath("/images/team-collab.jpg"),
  wireframeReview: sitePath("/images/wireframe-review.jpg"),
  crmDashboard: sitePath("/images/crm-dashboard.jpg"),
  consultation: sitePath("/images/consultation.jpg"),
  freelancerDesk: sitePath("/images/freelancer-desk.jpg"),
  strategyMeeting: sitePath("/images/strategy-meeting.jpg"),
  opsMonitors: sitePath("/images/ops-monitors.jpg"),
  growthChart: sitePath("/images/growth-chart.jpg"),
  focusedFreelancer: sitePath("/images/focused-freelancer.jpg"),
  studioTeam: sitePath("/images/studio-team.jpg"),
  partnershipHandshake: sitePath("/images/partnership-handshake.jpg"),
  digitalConnect: sitePath("/images/digital-connect.jpg"),
  integrationsHub: sitePath("/images/integrations-hub.jpg"),
  ideaLightbulb: sitePath("/images/idea-lightbulb.jpg"),
  growthPath: sitePath("/images/growth-path.jpg"),
  workflowChecklist: sitePath("/images/workflow-checklist.jpg"),
  analyticsDashboard: sitePath("/images/analytics-dashboard.jpg"),
} as const;
