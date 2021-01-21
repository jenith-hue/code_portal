(function() {
  angular.module("celebrityFacts").factory("DataService", DataFactory);

  function DataFactory() {
    var dataObj = {
      quizQuestions: quizQuestions,
      correctAnswers: correctAnswers
    };
    return dataObj;
  }

var correctAnswers = [0,1,2,0,2,0,1,3,0,2,3,1,0,1,1,1,3,2,3,0,1,1,0,2,0,3,2,0,3,2,0,0,3,2,3,0,0,0,2,3,2,3,0,3,0]; 

var quizQuestions = [
    {
      type: "text",
      text: " Which level of management would be most involved in the function of planning and organizing? ",
      possibilities: [
        {
          answer: "Top"
        },
        {
          answer: "Middle"
        },
        {
          answer: "First Level"
        },
        {
          answer: "All of these"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The determination and grouping of activities, delegation of authority, span of management etc, are involved in the function of ",
      possibilities: [
        {
          answer: "Planning"
        },
        {
          answer: "Organizing"
        },
        {
          answer: "Directing"
        },
        {
          answer: "Controlling"
        }
      ],
      selected: null,
      correct: null
    },

    {
      type: "text",
      text: " Management is ",
      possibilities: [
        {
          answer: "An Art"
        },
        {
          answer: "A Science"
        },
        {
          answer: " Both Art and Science "
        },
        {
          answer: " Neither an art nor a science"
        }
      ],
      selected: null,
      correct: null
    },

   

    {
        type: "text",
        text: " The founder of scientific management movement was ",
        possibilities: [
          {
            answer: "Henri Fayol"
          },
          {
            answer: "F.W.Taylor"
          },
          {
            answer: "Elton Mayo"
          },
          {
            answer: "M.P.Follett."
          }
        ],
        selected: null,
        correct: null
    },

    {
        type: "text",
        text: " The primary measure of the effectiveness of a manager is ",
        possibilities: [
          {
            answer: "the number of employees supervised"
          },
          {
            answer: "the total size of the organization"
          },
          {
            answer: "the results obtained"
          },
          {
            answer: "how busy the person is"
          }
        ],
        selected: null,
        correct: null
    },

   

    {
        type: "text",
        text: "In comparison to top level managers, a first -line supervisor will spend more time in ",
        possibilities: [
          {
            answer: "direction of subordinates"
          },
          {
            answer: "policy making"
          },
          {
            answer: "public relations"
          },
          {
            answer: "long range planning"
          }
        ],
        selected: null,
        correct: null
    },
    {
      type: "text",
      text: " The chief informational needs required for effective planning are ",
      possibilities: [
        {
          answer: "objective, personnel and political"
        },
        {
          answer: "environmental, competitive and of the individual enterprise"
        },
        {
          answer: "environmental, political and price levels"
        },
        {
          answer: "none of these."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Three types of plans are usually used in large business corporations. Which of the following is least useful? ",
      possibilities: [
        {
          answer: "strategic"
        },
        {
          answer: "annual operating"
        },
        {
          answer: "short-range operational"
        },
        {
          answer: "informal"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The most current flow of formalized planning process is initiated at ",
      possibilities: [
        {
          answer: "the top and flows downwards"
        },
        {
          answer: "the middle levels and flows up and down"
        },
        {
          answer: "the top and bottom and flows toward the middle"
        },
        {
          answer: "the bottom and flows upwards."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " MBA evaluates the performance of operating units and individuals in terms of  ",
      possibilities: [
        {
          answer: "employee characteristics"
        },
        {
          answer: "employee personal traits"
        },
        {
          answer: "objective work goals"
        },
        {
          answer: "All of these."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Planning function of management is performed by: ",
      possibilities: [
        {
          answer: "top management"
        },
        {
          answer: "middle management"
        },
        {
          answer: "lower management"
        },
        {
          answer: "All of these levels"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Advantage of MBO is that : ",
      possibilities: [
        {
          answer: "a worker's job tasks become more clarified"
        },
        {
          answer: "worker's may adhere rapidly to establish goals"
        },
        {
          answer: "appraisals are now based on results"
        },
        {
          answer: "Self-evaluation and self-control are emphasized more than before."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Most organization charts are displayed on which basis: ",
      possibilities: [
        {
          answer: "vertical"
        },
        {
          answer: "horizontal"
        },
        {
          answer: "circular"
        },
        {
          answer: "Three-dimensional."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Which regard to power and authority ,we may conclude all but which one of the following : ",
      possibilities: [
        {
          answer: "authority is only one source of influence among many"
        },
        {
          answer: "supervisor should never have to rely on coercive power to obtain results"
        },
        {
          answer: "constant reliance on authority indicates a potential supervisory problem"
        },
        {
          answer: "group acceptance of authority is necessary for it to become a useful influence."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Centralization is a system of: ",
      possibilities: [
        {
          answer: "Planning"
        },
        {
          answer: "Organizing"
        },
        {
          answer: "staffing"
        },
        {
          answer: "Directing"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "Which of the following is the oldest type of organization? ",
      possibilities: [
        {
          answer: "functional organization"
        },
        {
          answer: "line organization"
        },
        {
          answer: "line and staff organization"
        },
        {
          answer: "committee organization."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Matrix organizations are really a combination of the: ",
      possibilities: [
        {
          answer: "	product and process bases"
        },
        {
          answer: "process and geographic bases"
        },
        {
          answer: "customer and functional bases"
        },
        {
          answer: "functional and product base"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " With regard to the differentiation of line and staff, we may conclude; ",
      possibilities: [
        {
          answer: "line has total authority ;staff is limited to an advisory role"
        },
        {
          answer: "power is shifting away from staff toward line and appropriately so"
        },
        {
          answer: "the continued distinction creates unfortunate psychological batters"
        },
        {
          answer: "there is a sharp difference between the two."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Staffing function of management comprises the activities of : ",
      possibilities: [
        {
          answer: "selecting the suitable person for positions"
        },
        {
          answer: "defining the requirements with regard to the people for the job to be done"
        },
        {
          answer: "training and developing staff to accomplish their task more effectively"
        },
        {
          answer: "all of these."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " One of the main reasons for obtaining a manager from outside an enterprise is : ",
      possibilities: [
        {
          answer: "to obtain fresh idea and new applications of management"
        },
        {
          answer: "to enhance the public image of the enterprise being good place to work"
        },
        {
          answer: "to avoid a moral problem among old employees"
        },
        {
          answer: "none of these"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " 	The shifting of an employee from one of another that does not involve the assumption of greater responsibilities is knows: ",
      possibilities: [
        {
          answer: "shifting"
        },
        {
          answer: "transfer"
        },
        {
          answer: "exchange"
        },
        {
          answer: "termination."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Process of collecting and analysing information about the duties, responsibilities and conditions of a specific work assignment is : ",
      possibilities: [
        {
          answer: "job analysis"
        },
        {
          answer: "job evaluation"
        },
        {
          answer: "activity analysis"
        },
        {
          answer: "occupation analysis"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " A relatively recent development in the area of performance appraisal by which the performance review is oriented toward mutually established job objectives, is: ",
      possibilities: [
        {
          answer: "goal oriented appraisal"
        },
        {
          answer: "checklist method"
        },
        {
          answer: "critical incidents method"
        },
        {
          answer: "graphical scales method."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The developmental method in which the participants have the opportunity to learn human relations skill in a laboratory setting is : ",
      possibilities: [
        {
          answer: "special training courses"
        },
        {
          answer: "business games"
        },
        {
          answer: "role playing"
        },
        {
          answer: "sensitive training ."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " In controlling ,a common means for determining performance is by means of: ",
      possibilities: [
        {
          answer: "reports"
        },
        {
          answer: "personal objectives"
        },
        {
          answer: "standards"
        },
        {
          answer: "key cases."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "  The control function of management embraces: ",
      possibilities: [
        {
          answer: "cost control"
        },
        {
          answer: "financial control"
        },
        {
          answer: "budgetary control"
        },
        {
          answer: "all of these."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " One of the following budgets is probably most closely allied to the sales budget: ",
      possibilities: [
        {
          answer: "labour budget"
        },
        {
          answer: "production budget"
        },
        {
          answer: "advertising budget"
        },
        {
          answer: "cash budget."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Several types of control systems rely on quantitative data in their measurement process .Which type does NOT? ",
      possibilities: [
        {
          answer: "social control"
        },
        {
          answer: "financial control"
        },
        {
          answer: "production control"
        },
        {
          answer: "quality control."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " All of the following are dangers inherent in over control except:  ",
      possibilities: [
        {
          answer: "accenting short run results and ignoring long run outcomes"
        },
        {
          answer: "the reduction of personal freedom and independence at work"
        },
        {
          answer: "the creation of anxiety and stress among workers"
        },
        {
          answer: "a tendency toward increased flexibility."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " For best management, controlling should be ",
      possibilities: [
        {
          answer: "	profit-oriented"
        },
        {
          answer: "cost-oriented"
        },
        {
          answer: "objective-oriented"
        },
        {
          answer: "man-oriented."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The principle that a subordinate should receive order and be responsible to only one boss is known as: ",
      possibilities: [
        {
          answer: "unity of command"
        },
        {
          answer: "unity of direction"
        },
        {
          answer: "unity of work"
        },
        {
          answer: "unity of control"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The activity of an executive manager in which we given careful consideration to future even is known as: ",
      possibilities: [
        {
          answer: "planning"
        },
        {
          answer: "controlling"
        },
        {
          answer: "appraising"
        },
        {
          answer: "organizing"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " 	Successful coordination of activities results from effectively carrying out the function: ",
      possibilities: [
        {
          answer: "planning"
        },
        {
          answer: "Organizing"
        },
        {
          answer: "Directing"
        },
        {
          answer: "all of these"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The managerial function of organizing is : ",
      possibilities: [
        {
          answer: "to review and adjust plan in the light of changing conditions"
        },
        {
          answer: "to establish a program for the accomplishment of objectives"
        },
        {
          answer: "to create a structure of functions and duties to be performed by a group of people"
        },
        {
          answer: "to get things done through and with the help of people."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "	The proper sequence of MBO activities is : ",
      possibilities: [
        {
          answer: "implement the program, define the job, set objectives, evaluate performance"
        },
        {
          answer: "	evaluate performance, define the job, set objectives, implement the program"
        },
        {
          answer: "set objectives, evaluate performance, implement the program"
        },
        {
          answer: "define the job ,set objectives, evaluate performance, implement the program."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The principle of limiting factor states that in choosing from among alternatives the more individuals can identify and solve for those factors which are critical to: ",
      possibilities: [
        {
          answer: "formulation of organizational policies,rules ,procedures and strategies,the more clearly and accurately they can select the most favourable alternative"
        },
        {
          answer: "	the attainment of desired goal,the more clearly and accurately they can select the most favourable alternative"
        },
        {
          answer: "	organizational efficiency and efficacy,the more clearly accurately they can select most favourable alternative"
        },
        {
          answer: "none of these"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The organization chart will not show: ",
      possibilities: [
        {
          answer: "the informal organization"
        },
        {
          answer: "how the work is divided"
        },
        {
          answer: "the nature of the work performed by the components"
        },
        {
          answer: "chain of command"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Decentralization : ",
      possibilities: [
        {
          answer: "increases the importance of superiors"
        },
        {
          answer: "decreases the importance of superiors"
        },
        {
          answer: "increases the importance of subordinates"
        },
        {
          answer: "decreases the importance of subordinates"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The role of staff in line and staff organization is: ",
      possibilities: [
        {
          answer: "Authoritative"
        },
        {
          answer: "supervise"
        },
        {
          answer: "advisory"
        },
        {
          answer: "monitor"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " People -centred leadership is described as: ",
      possibilities: [
        {
          answer: "democratic"
        },
        {
          answer: "permissive"
        },
        {
          answer: "follower -oriented"
        },
        {
          answer: "all of these"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The communication pattern which was generally fastest and most accurate for simple problems was the: ",
      possibilities: [
        {
          answer: "circular"
        },
        {
          answer: "chain"
        },
        {
          answer: "centralized"
        },
        {
          answer: "none of these"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " A cause of job dissatisfaction is: ",
      possibilities: [
        {
          answer: "salary"
        },
        {
          answer: "fringe benefits"
        },
        {
          answer: "the use of human resource accounting"
        },
        {
          answer: "the conflict between worker expectations and the organizations conditions"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " In controlling ,a common means for determining performance is by means of: ",
      possibilities: [
        {
          answer: "reports"
        },
        {
          answer: "personal objectives"
        },
        {
          answer: "standards"
        },
        {
          answer: "key cases."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The budget that is most directly concerned with the distribution of overhead expenses    is the : ",
      possibilities: [
        {
          answer: "production budget"
        },
        {
          answer: "cash budget"
        },
        {
          answer: "Advertisement budget"
        },
        {
          answer: "manufacturing budget"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Control of a departmental budget by a finance staff is an example of: ",
      possibilities: [
        {
          answer: "centralized control"
        },
        {
          answer: "personal control"
        },
        {
          answer: "self-control"
        },
        {
          answer: "none of these."
        }
      ],
      selected: null,
      correct: null
    }
  ];



})();
