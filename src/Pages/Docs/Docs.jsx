import React from 'react';
import MainLayout from '../../Layout/MainLayout';

const Docs = () => {
    return (
        <MainLayout>
            <div className='px-5 md:px-10 overflow-x-hidden'>
                <h1 className='font-bold text-3xl md:text-5xl text-black text-center my-5'>
                    QueryLens AI Documentation 📝
                </h1>
                <div className='prose max-w-none mx-5 my-10 md:m-10 text-justify'>
                    <p>
                        Welcome to the QueryLensAI Documentation—a comprehensive resource hub
                        designed to guide developers and data professionals in seamlessly
                        integrating, configuring, and customizing QueryLensAI. This technical
                        documentation provides step-by-step instructions, detailed API references,
                        and advanced customization techniques to unlock the full potential of our
                        conversational AI-powered data querying platform.
                    </p>

                    <p>
                        Our documentation ensures that developers have the tools and information
                        required to implement and optimize QueryLensAI effectively. Here's a
                        detailed breakdown of what this documentation covers:
                    </p>

                    <hr />

                    <h3>1. Environment Setup</h3>
                    <p>
                        Setting up the QueryLensAI development and runtime environment is the first
                        step to integrating the platform. This section provides:
                    </p>
                    <ul>
                        <li>
                            <strong>Conda Configuration</strong>:
                            <ul>
                                <li>
                                    Detailed instructions for creating and managing the environment
                                    using the <code>environment.yml</code> file.
                                </li>
                                <li>
                                    Includes required dependencies like Python 3.11,
                                    <code>numpy</code>, <code>pandas</code>, <code>fastapi</code>, and
                                    additional LLM-specific libraries such as
                                    <code>langchain</code> and <code>llama-index</code>.
                                </li>
                                <li>
                                    <strong>Command Examples</strong>:
                                    <div className="mockup-code">
                                        <pre data-prefix="~$">
                                            <code>
                                                # Create the Conda environment
                                                conda env create -f environment.yml

                                                # Activate the environment
                                                conda activate querylensai
                                            </code>
                                        </pre>
                                    </div>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Local Development Environment</strong>:
                            <ul>
                                <li>
                                    Steps to set up tools like <code>python-dotenv</code> for managing
                                    environment variables (e.g., API keys or database credentials).
                                </li>
                                <li>
                                    Explanation of folder structures for ease of navigation.
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <hr />

                    <h3>2. API Integration</h3>
                    <p>
                        QueryLensAI’s API layer, built with FastAPI, allows seamless interaction
                        between users and the backend system. This section provides:
                    </p>
                    <ul>
                        <li>
                            <strong>API Endpoints</strong>:
                            <ul>
                                <li>
                                    <strong>Root Endpoint (<code>/</code>)</strong>:
                                    <ul>
                                        <li>Verifies that the server is running successfully.</li>
                                        <li>
                                            Example Response:
                                            <div className='mockup-code'>
                                            <pre data-prefix="~$">
                                                <code>
                                                    {`{ "Hello": "Welcome to QueryLensAI" }`}
                                                </code>
                                            </pre>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Dataset Listing (<code>/get-dataset-lov</code>)</strong>:
                                    <ul>
                                        <li>
                                            Retrieves a list of available datasets with their metadata
                                            for querying.
                                        </li>
                                        <li>
                                            Example Response:
                                            <div className='mockup-code'>
                                            <pre data-prefix="~$">
                                                <code>
                                                    {`{ "names": ["acs_data", "sales_records"] }`}
                                                </code>
                                            </pre>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Query Endpoint (<code>/get_answer</code>)</strong>:
                                    <ul>
                                        <li>
                                            Processes natural language queries and provides
                                            conversational responses.
                                        </li>
                                        <li>
                                            Input Example:
                                            <div className='mockup-code'>
                                            <pre data-prefix="~$">
                                                <code>
                                                    {`{
  "query": "What is the total population for counties with poverty rates above 20%?"
}`}
                                                </code>
                                            </pre>
                                            </div>
                                        </li>
                                        <li>
                                            Response Example:
                                            <div className='mockup-code'>
                                            <pre data-prefix="~$">
                                                <code>
                                                    {`{
  "answer": "The total population for counties with poverty rates above 20% is 1,200,000."
}`}
                                                </code>
                                            </pre>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>CORS Configuration</strong>:
                            <ul>
                                <li>
                                    Details on how to configure Cross-Origin Resource Sharing (CORS)
                                    middleware to integrate frontend applications hosted on different
                                    domains.
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <hr />

                    <h3>3. Query Examples</h3>
                    <p>
                        This section demonstrates how to construct effective natural language
                        queries and explains how they are transformed into structured operations by
                        the in-house LLM.
                    </p>
                    <ul>
                        <li>
                            <strong>Example 1</strong>:
                            <ul>
                                <li>
                                    <em>Query</em>: <em>"What is the average income for states with a
                                        population greater than 1 million?"</em>
                                </li>
                                <li>
                                    <strong>Transformation</strong>:
                                    <ul>
                                        <li>
                                            Step 1: Filter rows where <code>Population &gt; 1,000,000</code>.
                                        </li>
                                        <li>Step 2: Calculate the average of the <code>Income</code> column.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Result</strong>:
                                    <em>"The average income for states with a population greater than 1 million is $55,000."</em>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default Docs;
