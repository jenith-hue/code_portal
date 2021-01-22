(function() {
  angular.module("celebrityFacts").factory("DataService", DataFactory);

  function DataFactory() {
    var dataObj = {
      quizQuestions: quizQuestions,
      correctAnswers: correctAnswers
    };
    return dataObj;
  }

var correctAnswers = [0,1,0,0,0,2,0,1,2,0,1,0,2,0,1,0,1,2,1,1,2,1,1,0,3,3,0,0,0,0,2,1,1,0,0,1,0,0,0,3,1,1,0,0,0]; 

var quizQuestions = [
    {
      type: "text",
      text: " In_____ topology if the computer cable is broken, networks get down ",
      possibilities: [
        {
          answer: "bus"
        },
        {
          answer: "star"
        },
        {
          answer: "ring"
        },
        {
          answer: "mesh"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The network layer protocol for internet is __________  ",
      possibilities: [
        {
          answer: "ethernet"
        },
        {
          answer: "IP"
        },
        {
          answer: "FTP"
        },
        {
          answer: "HTTP"
        }
      ],
      selected: null,
      correct: null
    },

    {
      type: "text",
      text: " ICMP is primarily used for __________  ",
      possibilities: [
        {
          answer: "error and diagnostics"
        },
        {
          answer: "addressing"
        },
        {
          answer: " forwarding "
        },
        {
          answer: "routing"
        }
      ],
      selected: null,
      correct: null
    },

   

    {
        type: "text",
        text: " Which layer provides the services to user?  ",
        possibilities: [
          {
            answer: "application layer "
          },
          {
            answer: "presentation layer"
          },
          {
            answer: "session layer"
          },
          {
            answer: "network layer "
          }
        ],
        selected: null,
        correct: null
    },

    {
        type: "text",
        text: " In _________ systems, resources are allocated on demand ",
        possibilities: [
          {
            answer: "Packet switched"
          },
          {
            answer: "Circuit switched"
          },
          {
            answer: "Message switched"
          },
          {
            answer: "Data switched"
          }
        ],
        selected: null,
        correct: null
    },

   

    {
        type: "text",
        text: "Which transmission media provides the highest transmission speed in a network? ",
        possibilities: [
          {
            answer: "coaxial cable"
          },
          {
            answer: "twisted pair cable"
          },
          {
            answer: "optical fiber"
          },
          {
            answer: "electrical cable"
          }
        ],
        selected: null,
        correct: null
    },
    {
      type: "text",
      text: " What is a primary function of the trailer information added by the data link layer encapsulation? ",
      possibilities: [
        {
          answer: "Supports error detection"
        },
        {
          answer: "Ensures ordered arrival of data"
        },
        {
          answer: "Identifies the devices on the local network"
        },
        {
          answer: "Provides delivery to correct destination"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Which ARQ mechanism deals with the transmission of only damaged or lost frames despite the other multiple frames by increasing the efficiency & its utility in noisy channels? ",
      possibilities: [
        {
          answer: "Go-Back-N ARQ"
        },
        {
          answer: "Selective Repeat ARQ"
        },
        {
          answer: "Stop-and-Wait ARQ"
        },
        {
          answer: "All of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Which category of HDLC frames undergoes error and flow control mechanisms by comprising send and receive sequence numbers? ",
      possibilities: [
        {
          answer: "U-frames"
        },
        {
          answer: "I-frames"
        },
        {
          answer: "S-frames"
        },
        {
          answer: "All of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The ------------ protocol has flow control but not error control  ",
      possibilities: [
        {
          answer: "Stop- and- wait"
        },
        {
          answer: "Simplest"
        },
        {
          answer: "Go-BACK-N ARQ"
        },
        {
          answer: "Selective- Repeat ARQ"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " In IEEE 802.11 , a BSS with an AP is sometimes called an --------- ",
      possibilities: [
        {
          answer: "An ad hoc architecture"
        },
        {
          answer: "An infrastructure network"
        },
        {
          answer: "Either (a) or (b)"
        },
        {
          answer: "Neither (a) nor (b)"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " A Bluetooth network is called a --------- ",
      possibilities: [
        {
          answer: "Piconet"
        },
        {
          answer: "Scatternet"
        },
        {
          answer: "Bluenet"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Which functionality of the network layer deals with the necessity of a three-way handshake usually before the transmission of data from sender to receiver? ",
      possibilities: [
        {
          answer: "Path determination"
        },
        {
          answer: "Forwarding"
        },
        {
          answer: "Call Set-up"
        },
        {
          answer: "All of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Routing between autonomous systems is referred to as ____________. ",
      possibilities: [
        {
          answer: "interdomain routing"
        },
        {
          answer: "intradomain routing"
        },
        {
          answer: "both a and b"
        },
        {
          answer: "none of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " In ________, each node maintains a vector (table) of minimum distances to every node. ",
      possibilities: [
        {
          answer: "path vector"
        },
        {
          answer: "distance vector"
        },
        {
          answer: "link state"
        },
        {
          answer: "none of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "Which of the following is a necessary part of the IPv6 datagram? ",
      possibilities: [
        {
          answer: "Base header"
        },
        {
          answer: "Extension header"
        },
        {
          answer: "Data packet from the upper layer"
        },
        {
          answer: "(a) and (c)"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " If there are N routers from source to destination, the total end to end delay in sending packet P(L-> number of bits in the packet R-> transmission rate) is equal to ______________",
      possibilities: [
        {
          answer: "	N"
        },
        {
          answer: "(N*L)/R"
        },
        {
          answer: "(2N*L)/R"
        },
        {
          answer: "L/R"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The TTL field has value 10. How many routers (max) can process this datagram? ",
      possibilities: [
        {
          answer: "11"
        },
        {
          answer: "5"
        },
        {
          answer: "10"
        },
        {
          answer: "1"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Important feature provided by transport layer is:",
      possibilities: [
        {
          answer: "Host to Host service"
        },
        {
          answer: "Process to Process service"
        },
        {
          answer: "Node to Node service"
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
      text: " Well known port numbers are in the range of: ",
      possibilities: [
        {
          answer: "1 to 1024"
        },
        {
          answer: "0 to 1023"
        },
        {
          answer: "1024 to 49,151"
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
      text: "Technique of sending data along with acknowledgement is called as: * ",
      possibilities: [
        {
          answer: "Reverse Forwarding"
        },
        {
          answer: "Selective Forwarding"
        },
        {
          answer: "Piggybacking"
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
      text: " The header length of UDP is: ",
      possibilities: [
        {
          answer: "20 bytes"
        },
        {
          answer: "8 bytes"
        },
        {
          answer: "40 bytes"
        },
        {
          answer: "32 bytes"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Connection can be aborted by enabling which control flag ",
      possibilities: [
        {
          answer: "PSH"
        },
        {
          answer: "RST"
        },
        {
          answer: "URG"
        },
        {
          answer: "MOV"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Nagle’s algorithm provides solution to sender side silly window syndrome ",
      possibilities: [
        {
          answer: "True"
        },
        {
          answer: "False"
        },
        {
          answer: ""
        },
        {
          answer: ""
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Which of the following is/are the important applications of the application layer?  ",
      possibilities: [
        {
          answer: "Electronic mail"
        },
        {
          answer: "World Wide Web"
        },
        {
          answer: "USENET"
        },
        {
          answer: "All of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Which is not a application layer protocol?  ",
      possibilities: [
        {
          answer: "HTTP"
        },
        {
          answer: "SMTP"
        },
        {
          answer: "FTP"
        },
        {
          answer: "TCP"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " SMTP and HTTP are ____________; Internet Explorer and Chrome are _____________.  ",
      possibilities: [
        {
          answer: "Application protocols; Application programs"
        },
        {
          answer: "Application programs; Application protocols"
        },
        {
          answer: "both (a) and (b)"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The WWW project was initiated by ______________. ",
      possibilities: [
        {
          answer: "European Laboratory for Particle Physics (CERN)"
        },
        {
          answer: "IETF"
        },
        {
          answer: "IANA"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The URL consists of the following parts: ",
      possibilities: [
        {
          answer: "protocol, host computer, port and path"
        },
        {
          answer: "protocol, host computer, port"
        },
        {
          answer: "host computer, port and path"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " The first component of an electronic mail system is ___________________",
      possibilities: [
        {
          answer: "	User Agent (UA)"
        },
        {
          answer: "Manager"
        },
        {
          answer: "both (a) and (b)"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Assume five devices are arranged in a mesh topology. How many cables are needed?",
      possibilities: [
        {
          answer: "8"
        },
        {
          answer: "6"
        },
        {
          answer: "10"
        },
        {
          answer: "4"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "IP, ARP, RARP, ICMP and IGMP are related to",
      possibilities: [
        {
          answer: "Transport layer"
        },
        {
          answer: "Network layer"
        },
        {
          answer: "Application layer"
        },
        {
          answer: "Physical layer"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " In ______, a block of bits is organized in a table (rows and columns). The parity bit for each column is checked and a new row of eight bits which are parity bits for the whole block is created. Original data with eight parity bits are transferred to the receiver.  ",
      possibilities: [
        {
          answer: "Vertical Redundancy Check (VRC)"
        },
        {
          answer: "Longitudinal Redundancy Check (LRC)"
        },
        {
          answer: "Cyclic Redundancy Check (CRC)"
        },
        {
          answer: "Checksum"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " A technique called _____________ is used to improve the efficiency of the bidirectional protocols. When a frame is carrying data from A to B, it can also carry control information about arrived (or lost) frames from B; when a frame is carrying data from B to A, it can also carry control information about the arrived (or lost) frames from A.  ",
      possibilities: [
        {
          answer: "piggybacking"
        },
        {
          answer: "synchronization"
        },
        {
          answer: "both (a) and (b)"
        },
        {
          answer: "None of the above."
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "	TELNET operates in three modes: _____________, ____________ and ______________.",
      possibilities: [
        {
          answer: "default mode; character mode; line mode"
        },
        {
          answer: "default mode; character mode; transmission mode"
        },
        {
          answer: "character mode; line mode; transmission mode"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " In ____________ addressing, variable length blocks are assigned that belong to no class. The entire address space is divided into blocks of different sizes. An organization is granted a block suitable for its purposes. ",
      possibilities: [
        {
          answer: "Classful"
        },
        {
          answer: "	Classless"
        },
        {
          answer: "	both (a) and (b)"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " For IPv4, __________________ is an alternative to the older system of representing networks by their starting address and the subnet mask, both written in dot-decimal notation. 192.168.100.0/24 is equivalent to 192.168.100.0/255.255.255.0. ",
      possibilities: [
        {
          answer: "CIDR notation"
        },
        {
          answer: "IPv6"
        },
        {
          answer: "either (a) or (b)"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "  _______________is a network management protocol used on Internet Protocol (IP) networks, whereby a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on the network, so they can communicate with other IP networks",
      possibilities: [
        {
          answer: "Dynamic Host Configuration Protocol (DHCP)"
        },
        {
          answer: "BOOTP"
        },
        {
          answer: "ICMP"
        },
        {
          answer: "IGMP"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " When the size of the data unit received from the upper layer is too long for the network layer datagram or data link frame to handle, the transport protocol divides it into smaller usable blocks called segments. This process is called ________. ",
      possibilities: [
        {
          answer: "Segmentation"
        },
        {
          answer: "Concatenation"
        },
        {
          answer: "both (a) and (b)"
        },
        {
          answer: "none of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Find the FTP reply whose message is wrongly matched. ",
      possibilities: [
        {
          answer: "331 – Username OK, password required"
        },
        {
          answer: "425 – Can’t open data connection"
        },
        {
          answer: "452 – Error writing file"
        },
        {
          answer: "452 – Cannot open data connection"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " Match the following between the column ‘Method’ and the column ‘Action’. Method Action. I GET 1. Sends a document from the server to the client. II POST 2. Requests a document from the server. III PUT 3. Sends some information from the client to the server IVHEAD 4.Requests information about a document but not the document itself.  ",
      possibilities: [
        {
          answer: "I,1; II,3; III,2, IV, 4"
        },
        {
          answer: "I,2; II,3; III,1; IV,4"
        },
        {
          answer: "I,3; II,1; III;2; IV,4"
        },
        {
          answer: "I,2; II,1; III,3; IV,4"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " A serious problem can arise in the sliding window operation when the receiver is only able to accept a few bytes at a time or when the sender transmits data in small segments repeatedly. This is called ____________ syndrome. ",
      possibilities: [
        {
          answer: "sliding window"
        },
        {
          answer: "silly window"
        },
        {
          answer: "either (a) or (b)"
        },
        {
          answer: "neither (a) nor (b)"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " ______________ is a measure of the time it takes for a packet to travel from a computer, across a network to another computer, and back.  ",
      possibilities: [
        {
          answer: "Round Trip Time (RTT) "
        },
        {
          answer: "Time to Live (TTL)"
        },
        {
          answer: "either (a) or (b)"
        },
        {
          answer: "none of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: " ._____________ is a traffic shaping mechanism. In it, the input rate can vary but the output rate remains constant. A technique called leaky bucket can smooth out bursty traffic.  ",
      possibilities: [
        {
          answer: "Leaky bucket"
        },
        {
          answer: "DECBit"
        },
        {
          answer: "RED"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "  __________ is an Internet Protocol (IP) process that breaks packets into smaller pieces (fragments), so that the resulting pieces can pass through a link with a smaller maximum transmission unit (MTU) than the original packet size. The fragments are reassembled by the receiving host ",
      possibilities: [
        {
          answer: "IP fragmentation"
        },
        {
          answer: "segmentation"
        },
        {
          answer: "framing"
        },
        {
          answer: "None of the above"
        }
      ],
      selected: null,
      correct: null
    }
  ];



})();
