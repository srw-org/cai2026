export type WorkshopPerson = {
  name: string;
  affiliation?: string;
  url?: string;
  photo?: string;
};

export type WorkshopSponsor = {
  name: string;
  url?: string;
  logo?: string;
};

export type WorkshopAgendaItem = {
  time: string;
  title: string;
  description?: string;
};

export type WorkshopCallForPapers = {
  overview: string;
  tracks?: string[];
  submissionUrl?: string;
  formattingUrl?: string;
  importantDates?: { label: string; date: string }[];
  notes?: string[];
};

export type WorkshopKeyInfo = {
  conference: string;
  dates: string;
  location: string;
  timezone?: string;
  registrationUrl?: string;
  websiteUrl?: string;
};

export type WorkshopContact = {
  name?: string;
  email: string;
};

export type WorkshopPaper = {
  title: string;
  authors: string;
  url?: string;
};

export type WorkshopHighlight = {
  title: string;
  description: string;
};

export type WorkshopData = {
  slug: string;
  title: string;
  subtitle?: string;
  /** Optional banner image shown at the top of the page (path under /images). */
  banner?: string;
  overview: string[];
  /** Optional bulleted highlights rendered after the overview paragraphs. */
  overviewHighlights?: WorkshopHighlight[];
  /** Optional closing paragraph rendered after the highlights. */
  overviewClosing?: string;
  keyInfo: WorkshopKeyInfo;
  callForPapers?: WorkshopCallForPapers;
  speakers?: WorkshopPerson[];
  organizers?: WorkshopPerson[];
  agenda?: WorkshopAgendaItem[];
  /** Optional note shown above the schedule (e.g. the session date). */
  agendaNote?: string;
  papers?: WorkshopPaper[];
  sponsors?: WorkshopSponsor[];
  contacts?: WorkshopContact[];
};
