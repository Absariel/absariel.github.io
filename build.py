#!/usr/bin/env python3

import os
import json

script_path = os.path.abspath(__file__)
script_dir = os.path.dirname(script_path)
os.chdir(script_dir)

POSTS_MD_DIR = 'resources/posts'
POSTS_HTML_DIR = 'posts'

posts_names = []
for filename in os.listdir(POSTS_MD_DIR):
    if filename.endswith('.md'):
        filename_no_ext = filename[:-3]
        posts_names.append(filename)
        os.makedirs(f'{POSTS_HTML_DIR}/{filename_no_ext}', exist_ok=True)
        with open(f'{POSTS_HTML_DIR}/{filename_no_ext}/index.html', 'w') as f:
            f.write(f'''
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>{filename_no_ext}</title>
                    <link rel="stylesheet" type="text/css" href="/css/styles.css">

                    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
                    <script type="text/markdown" id="markdown-content" src="/resources/posts/{filename}"></script>
                </head>
                <body>
                    <div class="header">
                        <h2>Absariel's World</h2>
                    </div>

                    <div class="row">
                        <div class="card" id="content"></div>
                    </div>

                    <div class="footer">
                        <h2>What would I do with a footer even</h2>
                    </div>

                    <script src="/js/md_to_html.js"></script>
                </body>
                </html>
            ''')

with open(f'resources/posts/posts.json', 'w') as f:
    json.dump(posts_names, f, indent=4)