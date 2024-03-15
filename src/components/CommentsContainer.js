import React from 'react';
import CommentsList from './CommentsList';

const commentsData = [
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Anonymous',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
    replies: [
      {
        name: 'Anonymous',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
        replies: [
          {
            name: 'Anonymous',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
            replies: [
              {
                name: 'Anonymous',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                replies: [
                  {
                    name: 'Anonymous',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
