#!/usr/bin/python3
"""
a script that reads stdin line by line and computes metrics
"""
import sys
import re

if __name__ == '__main__':
    total = 0
    counts = {}

    log_pattern = (
        r'(?P<ip>\d+\.\d+\.\d+\.\d+) - \[(?P<date>.*?)\] '
        r'"GET /projects/260 HTTP/1\.1" (?P<status>\d+) (?P<size>\d+)'
    )
    log_regex = re.compile(log_pattern)

    def print_statistics():
        """
        print these statistics
        """
        print("File size:", total)
        for status_code, c in sorted(counts.items()):
            print(f"{status_code}: {c}")

    try:
        line_count = 0
        for line in sys.stdin:
            # Skip lines that don't match the input format
            match = log_regex.match(line.strip())
            if not match:
                continue
            """Extract information from the log line"""
            groups = match.groups()
            if len(groups) != 4:
                continue
            _, _, status_code, file_size = groups

            # Update total file size
            total += int(file_size)

            # Update status code counts
            if status_code.isdigit():
                counts[int(status_code)] = counts.get(int(status_code), 0) + 1

            line_count += 1

            # Print statistics every 10 lines
            if line_count % 10 == 0:
                print_statistics()

    except KeyboardInterrupt:
        """
        If a keyboard interruption occurs (CTRL + C),
        print the final statistics
        """
        print_statistics()
