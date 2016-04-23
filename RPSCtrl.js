angular.module("RPS").controller("RPSCtrl", function($scope) {
  $scope.player1 = "";
  $scope.player2 = "";
  $scope.verdict = "";
  $scope.message = "";
  $scope.p1wins  = 0;
  $scope.p2wins  = 0;
  $scope.options = [{
    selection: "Rock",
    image: "./images/rock.jpg"
  },
  {
    selection: "Paper",
    image: "./images/paper.jpg"
  },
  {
    selection: "Scissors",
    image: "./images/scissors.jpg"
  }];
  var outcomes = [{
      result: "Tie",
      image: "./images/getalongtie.jpg"
    },{
      result: "Rock Breaks Scissors!",
      image: "./images/rockbreaksscissors.jpg"
    },{
      result: "Scissors Cuts Paper!",
      image: "./images/scissorscutpaper.jpg"
    },{
      result: "Paper Covers Rock",
      image: "./images/papercoversrock.jpg"
  }];
  var messages = ["Noone Wins", "Player 1 Wins!", "Player 2 Wins!"];
  $scope.play = function(player1, player2){
    if (player1.selection === player2.selection) {
      $scope.verdict = outcomes[0];
      $scope.message = messages[0];
    }
    else if (player1.selection === "Rock" && player2.selection ==="Scissors") {
      $scope.verdict = outcomes[1];
      $scope.message = messages[1];
      $scope.p1wins++;
    }
    else if (player1.selection === "Scissors" && player2.selection ==="Paper") {
      $scope.verdict = outcomes[2];
      $scope.message = messages[1];
      $scope.p1wins++;
    }
    else if (player1.selection === "Paper" && player2.selection ==="Rock") {
      $scope.verdict = outcomes[3];
      $scope.message = messages[1];
      $scope.p1wins++;
    }
    else if (player2.selection === "Rock" && player1.selection ==="Scissors") {
      $scope.verdict = outcomes[1];
      $scope.message = messages[2];
      $scope.p2wins++;
    }
    else if (player2.selection === "Scissors" && player1.selection ==="Paper") {
      $scope.verdict = outcomes[2];
      $scope.message = messages[2];
      $scope.p2wins++;
    }
    else if (player2.selection === "Paper" && player1.selection ==="Rock") {
      $scope.verdict = outcomes[3];
      $scope.message = messages[2];
      $scope.p2wins++;
    }
  };
  $scope.randomizecpu = function(player1) {
    var num2 = Math.floor(Math.random()*$scope.options.length);
    $scope.player2 = $scope.options[num2];
    $scope.play(player1, $scope.player2);
  };
  $scope.randomize = function() {
    var num1 = Math.floor(Math.random()*$scope.options.length);
    var num2 = Math.floor(Math.random()*$scope.options.length);
    $scope.player1 = $scope.options[num1];
    $scope.player2 = $scope.options[num2];
    $scope.play($scope.player1, $scope.player2);
  };
  $scope.randomize();
});
