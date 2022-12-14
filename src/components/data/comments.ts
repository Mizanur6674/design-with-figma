export interface RootCommentType {
  id: number;
  name: string;
  title: string;
  detail: string;
  img?: string;
  replay: string;
}
export interface ChildCommentTypes extends RootCommentType {
  mention?: string;
}
export interface CommentType extends RootCommentType {
  comment?: Array<ChildCommentTypes>;
}

export const commentData: Array<CommentType> = [
  {
    id: 1,
    name: "Elijah Moss",
    title: "@hexagon.bestagon",
    img: "/images/elijah.svg",
    replay: "Replay",
    detail:
      "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
  },
  {
    id: 2,
    name: "James Skinner",
    title: "@hummingbird1",
    img: "/images/james.svg",
    replay: "Replay",
    comment: [
      {
        id: 3,
        name: "Anne Valentine",
        title: "@annev1990",
        img: "/images/anne.svg",
        replay: "Replay",
        detail:
          "@hummingbird1  While waiting for dark mode, there are browser extensions that will also do the job. Search for dark theme followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
        mention: " @hummingbird1",
      },
      {
        id: 4,
        name: "Ryan Welles",
        title: "@voyager.344",
        img: "/images/ryan.svg",
        replay: "Replay",
        detail:
          "@annev1990  Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
        mention: "@annev1990",
      },
    ],
    detail:
      "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
  },
];
