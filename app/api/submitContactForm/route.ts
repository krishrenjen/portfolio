import { NextResponse  } from "next/server";
import fetch, { Headers } from 'node-fetch';


const CREATE_URL = "https://api.notion.com/v1/pages"
const headers = {
    "Authorization": "Bearer " + process.env.NOTION_TOKEN,
    "Notion-Version": "2022-06-28",
    "content-type": "application/json"
}
const DATABASE_ID = process.env.NOTION_CONTACT_DATABASE_ID

export async function POST(request: NextResponse){

    try{
        const req = await request.json();

        
        var payload = {
            "parent": {"database_id": DATABASE_ID},
            "properties": {
                "Subject": {
                    "title": [
                        {
                            "text": {
                                "content": req.subject
                            }
                        }
                    ]
                },
                "Email": {
                    "email": req.email
                },
                "Name": {
                    "rich_text": [
                    {
                "type": "text",
                "text": {
                    "content": req.name
                }
                }
            ]
                },
                "Status": {
                    "select": {
                        "name": "Inbox"
                    }
                }
            },
            "children": [
                {
                    "object": "block",
                    "heading_1": {
                        "rich_text": [
                            {
                                "text": {
                                    "content": req.subject
                                }
                            }
                        ]
                    }
                },
                {
                    "object": "block",
                    "heading_3": {
                        "rich_text": [
                            {
                                "text": {
                                    "content": req.name + " (" + req.email +")",
                                    "link": {
                                        "url": "mailto:"+req.email+"?subject=%5BResponse%5D%20" + req.subject + "&body=This%20is%20a%20response%20to%20your%20email%20from%20my%20portfolio%20website%2C%20https%3A%2F%2Fkrishrenjen.vercel.app%3A%0D%0ASubject%3A%20"+req.subject +"%0D%0ABody%3A%20"+req.body+"%0D%0A%0D%0A%0D%0AHey%20"+ req.name+"%2C%0D%0A"
                                    }

                                
                                }
                            }
                        ]
                    }
                },
                {
                    "object": "block",
                    "paragraph": {
                        "rich_text": [
                            {
                                "text": {
                                    "content": req.body
                                }
                            }
                        ]
                    }
                }
            ]
        }

        const r = await fetch(CREATE_URL,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: headers
        })
        return NextResponse.json("Success")
    
    }

    catch{
        return NextResponse.error
    }

}