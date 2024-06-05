export type Assistant={
  id: string;
}

export interface TextContent {
    type: 'text';
    text: {
        value: string;
        annotations: any[]; // Adjust the type of annotations as needed
    };
}

export interface Message {
    id: string;
    object: string; // 'thread.message'
    created_at: number;
    assistant_id: string;
    thread_id: string;
    run_id: string;
    role: 'user' | 'assistant';
    content: TextContent[];
    file_ids: string[];
    metadata: Record<string, any>;
    status?: string; // Optional, depending on the version of the API
}