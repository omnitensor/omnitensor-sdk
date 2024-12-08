
// AI Model Interfaces and Classes
export interface AIModel {
    name: string;
    version: string;
    type: 'LLM' | 'Vision' | 'Speech';
    description: string;
    parameters?: Record<string, any>;
}

export class ModelRegistry {
    private models: Record<string, AIModel> = {};

    registerModel(model: AIModel): void {
        if (this.models[model.name]) {
            throw new Error(`Model with name ${model.name} is already registered.`);
        }
        this.models[model.name] = model;
    }

    getModel(name: string): AIModel | null {
        return this.models[name] || null;
    }

    listModels(): AIModel[] {
        return Object.values(this.models);
    }
}

// Example Usage
const registry = new ModelRegistry();
registry.registerModel({
    name: 'LLM-1',
    version: '1.0.0',
    type: 'LLM',
    description: 'A large language model for text generation.',
});
console.log(registry.listModels());
