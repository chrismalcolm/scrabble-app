from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from scrabble import Solver


SOLVER = Solver("Collins Scrabble Words (2015).txt")

def parse_board(board_string):
    return [list(board_string[i:i+15]) for i in range(0, len(board_string), 15)]

def parse_rack(rack_string):
    return list(rack_string)

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_POST(self):

        length = int(self.headers['Content-Length'])
        body = json.loads(self.rfile.read(length).decode())

        board = parse_board(body["board"])
        rack = parse_rack(body["rack"])

        solutions = str(SOLVER.solve(board, rack))
        print(solutions)

        self.wfile.write(solutions.encode())


httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()
