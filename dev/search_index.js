var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"The strongest steel is forged by the hottest fires","category":"page"},{"location":"#Description","page":"Home","title":"Description","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Hephaestus.jl is an auto-differentiable structural analysis package purely written in the Julia programming language. The auto-differentiability implies that you are able to take derivatives, gradients, Jacobians, and Hessians of a structure's response with respect to any of its defining parameters.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install Hephaestus.jl, type ] in Julia REPL to enter the built-in Julia package manager and execute the following command:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add Hephaestus","category":"page"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Hephaestus.jl is distributed under the MIT license.","category":"page"},{"location":"#References","page":"Home","title":"References","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"W. McGuire, R. H. Gallagher and R. D. Ziemian. Matrix Structural Analysis. Second edition Edition (Wiley, Middletown, DE, 2015).\n\n\n\n","category":"page"},{"location":"Manual/#Manual","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"Manual/","page":"Manual","title":"Manual","text":"using Hephaestus","category":"page"},{"location":"Manual/#Defining-a-model","page":"Manual","title":"Defining a model","text":"","category":"section"},{"location":"Manual/","page":"Manual","title":"Manual","text":"First, let's initialize a new model using the Model() constructor:","category":"page"},{"location":"Manual/","page":"Manual","title":"Manual","text":"M = Model()","category":"page"},{"location":"Manual/#Adding-nodes-to-the-model","page":"Manual","title":"Adding nodes to the model","text":"","category":"section"},{"location":"Manual/","page":"Manual","title":"Manual","text":"To add nodes to the model, use the add_node!() function:","category":"page"},{"location":"Manual/","page":"Manual","title":"Manual","text":"# add_node!(Model, Node ID, \n#   x-coordinate, y-coordinate, z-coordinate)\nadd_node!(M, 1, 0  , 0, 0)\nadd_node!(M, 2, 120, 0, 0)","category":"page"},{"location":"Manual/#Adding-materials-to-the-model","page":"Manual","title":"Adding materials to the model","text":"","category":"section"},{"location":"Manual/","page":"Manual","title":"Manual","text":"To add materials to the model, use the add_material!() function:","category":"page"},{"location":"Manual/","page":"Manual","title":"Manual","text":"# add_material!(Model, Material ID, \n#   Young's modulus, Poisson's ratio, Density)\nadd_material!(M, 1, 29000, 0.3, 0.000290)","category":"page"},{"location":"Manual/#Adding-sections-to-the-model","page":"Manual","title":"Adding sections to the model","text":"","category":"section"},{"location":"Manual/","page":"Manual","title":"Manual","text":"To add sections to the model, use the add_section!() function:","category":"page"},{"location":"Manual/","page":"Manual","title":"Manual","text":"# add_section!(Model, Section ID, \n#   Cross-sectional area, Moment of inertia about local z-axis, Moment of inertia about local y-axis, Polar moment of inertia)\nadd_section!(M, 1, 11.7, 307, 44.1, 0.91)","category":"page"},{"location":"API/#API","page":"API","title":"API","text":"","category":"section"},{"location":"API/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"Model\nNode\nMaterial\nSection\nElement","category":"page"},{"location":"API/#Hephaestus.Model","page":"API","title":"Hephaestus.Model","text":"struct Model\n\nA type that represents the FE model of a structure.\n\nTo initialize a new model, use the Model() constructor.\n\n\n\n\n\n","category":"type"},{"location":"API/#Hephaestus.Node","page":"API","title":"Hephaestus.Node","text":"struct Node\n\nA type that represents a node in the FE model of a structure.\n\nThis type should not be used directly.  Instead, use the add_node!() function to add a node to the model. To remove a node from the model, use the del_node!() function.\n\n\n\n\n\n","category":"type"},{"location":"API/#Hephaestus.Material","page":"API","title":"Hephaestus.Material","text":"struct Material\n\nA type that represents a material in the FE model of a structure.\n\nThis type should not be used directly. Instead, use the add_material!() function to add a material to the model. To remove a material from the model, use the del_material!() function.\n\n\n\n\n\n","category":"type"},{"location":"API/#Hephaestus.Section","page":"API","title":"Hephaestus.Section","text":"struct Section\n\nA type that represents a section in the FE model of a structure.\n\nThis type should not be used directly.  Instead, use the add_section!() function to add a section to the model. To remove a section from the model, use the del_section!() function.\n\n\n\n\n\n","category":"type"},{"location":"API/#Hephaestus.Element","page":"API","title":"Hephaestus.Element","text":"struct Element\n\nA type that represents an element in the FE model of a structure.\n\nThis type should not be used directly.  Instead, use the add_element!() function to add an element to the model.  To remove an element from the model, use the del_element!() function.\n\n\n\n\n\n","category":"type"},{"location":"API/#Functions","page":"API","title":"Functions","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"add_node!\ndel_node!\nadd_material!\ndel_material!\nadd_section!\ndel_section!\nadd_element!\ndel_element!\nadd_nodal_load!\ndel_nodal_load!\nreset_model!","category":"page"},{"location":"API/#Hephaestus.add_node!","page":"API","title":"Hephaestus.add_node!","text":"add_node!(model, ID, \n    x, y, z)\n\nAdds a node to the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.del_node!","page":"API","title":"Hephaestus.del_node!","text":"del_node!(model, ID)\n\nDeletes a node from the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.add_material!","page":"API","title":"Hephaestus.add_material!","text":"add_material!(model, ID, \n    E, ν, ρ)\n\nAdds a material to the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.del_material!","page":"API","title":"Hephaestus.del_material!","text":"del_material!(model, ID)\n\nDeletes a material from the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.add_section!","page":"API","title":"Hephaestus.add_section!","text":"add_section!(model, ID, \n    A, I_zz, I_yy, J)\n\nAdds a section to the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.del_section!","page":"API","title":"Hephaestus.del_section!","text":"del_section!(model, ID)\n\nDeletes a section from the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.add_element!","page":"API","title":"Hephaestus.add_element!","text":"add_element!(model, ID, \n    node_i_ID, node_j_ID, material_ID, section_ID; ω = 0)\n\nAdds an element to the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.del_element!","page":"API","title":"Hephaestus.del_element!","text":"del_element!(model, ID)\n\nDeletes an element from the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.add_nodal_load!","page":"API","title":"Hephaestus.add_nodal_load!","text":"add_nodal_load!(model, ID, \n    F_x, F_y, F_z, \n    M_x, M_y, M_z)\n\nApplies nodal loads to a node in the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.del_nodal_load!","page":"API","title":"Hephaestus.del_nodal_load!","text":"del_nodal_load!(model, ID)\n\nRemoves nodal loads from a node in the model.\n\n\n\n\n\n","category":"function"},{"location":"API/#Hephaestus.reset_model!","page":"API","title":"Hephaestus.reset_model!","text":"reset_model!(model)\n\nCompletely resets the model to a clean state.\n\n\n\n\n\n","category":"function"}]
}