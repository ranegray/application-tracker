import prisma from "../db";

export const getApplications = async (req, res) => {
    const applications = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        select: {
            applications: true
        }
    })

    res.json({data: applications})
}

export const getOneApplication = async (req, res) => {
    const application = await prisma.application.findFirst({
        where: {
            id: req.params.id,
            belongsToId: req.user.id
        }
    })

    res.json({data: application})
}

export const createApplication = async (req, res) => {
    const created = await prisma.application.create({
        data: {
            jobTitle: req.body.jobTitle,
            companyName: req.body.companyName,
            status: req.body.status,
            contact: req.body.contact,
            linkToApplication: req.body.linkToApplication,
            dateApplied: req.body.dateApplied,
            notes: req.body.notes,
            belongsToId: req.user.id
        }
    })

    res.json({data: created})
}

export const updateApplication = async (req, res) => {
    const updated = await prisma.application.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        },
        data: {
            jobTitle: req.body.jobTitle,
            companyName: req.body.companyName,
            status: req.body.status,
            contact: req.body.contact,
            linkToApplication: req.body.linkToApplication,
            dateApplied: req.body.dateApplied,
            notes: req.body.notes
        }
    })

    res.json({data: updated})
}

export const deleteApplication = async (req, res) => {
    const deleted = await prisma.application.delete({
        where: {
            id_belongsToId : {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    })

    res.json({data: deleted})
}