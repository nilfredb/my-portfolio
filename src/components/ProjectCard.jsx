import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
      <p className="text-gray-400 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
